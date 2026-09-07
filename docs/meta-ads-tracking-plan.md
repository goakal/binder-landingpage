# Meta Ads tracking plan — acquisition funnel per use case

Status: proposal. Nothing in this document is implemented yet.

## 1. Goal

Two questions must get a number:

1. **How many people register after they open a landing page?** (the full funnel)
2. **Which use-case page gives the cheapest registration?** (the comparison)

The funnel is: `ad impression → ad click → landing page open → CTA click → app open
→ OTP sign-in → new account`.

## 2. What the code does today

| Fact | Where |
|---|---|
| No Meta Pixel, no Conversions API, no tag manager | nothing found in `binder-landingpage`, `binderr_be`, `binder-flutter` |
| 5 use-case pages + home | `src/App.tsx` — `/for-ai-engineers`, `/for-education`, `/for-communities`, `/for-work`, `/for-families`, `/` |
| Every CTA points at `#get` | `MarketingHero`, `ComparisonTable`, `FeatureRow` links |
| `#get` gives 3 exits | `CtaSection.tsx` → web app; `DownloadModal.tsx` → App Store, Google Play |
| Exit URLs are in one file | `src/components/marketing/links.ts` |
| PostHog is in the Flutter app only | `lib/core/analytics/analytics.dart` |
| Branch SDK is in the Flutter app (deep links) | `lib/core/deeplink/`, `web/index.html` |
| The web app captures its start URL before the router rewrites it | `lib/main.dart:74` — `DeeplinkService.initialWebUri = Uri.base` |
| Sign-in returns `isNewUser` to the client | `lib/features/auth/auth_repository.dart` |
| The server knows a new account | `src/lib/auth.ts:91` after-hook, and `request-register-user.usecase.ts` |

## 3. The one hard problem: three exits

A browser pixel can follow a person from the landing page to the **web app**, because
both are browsers. A browser pixel **cannot** follow a person into the **iOS or Android
app**. The store click is the last thing the pixel sees.

This is why the plan has two phases. Phase 1 measures the full funnel on the web.
Phase 2 adds the mobile install funnel, which costs much more work.

## 4. Approach

**Decided: build both funnels, the web funnel first.** The web funnel answers the
use-case comparison in about one week. Mobile install attribution follows as a second
project, after the first numbers are in.

### Phase 1 — web funnel, end to end (do this first)

Point all Meta ad traffic at the web app. Keep the store buttons for organic visitors,
but make the web app the primary CTA for a visitor who arrives from an ad.

Confirmed: a person can complete OTP registration on `web.heybinder.com`. Phase 1 is
therefore a complete funnel, not a partial one.

Result: one complete, comparable funnel, in first-party data **and** in Meta Ads Manager.

### Phase 2 — mobile install funnel (second project)

Two options, in order of cost:

* **Branch** — the SDK is already in the app. Branch has a Meta Ads integration and
  deferred deep links. It can carry the use case through an install and report the
  install back to Meta. Lowest new code.
* **Meta SDK + SKAdNetwork** — the standard path for App Install campaigns. It needs a
  Meta app registration, an ATT prompt on iOS, and native configuration in
  `binder-flutter`. Highest cost, best Meta optimisation.

Do not start Phase 2 before Phase 1 gives numbers. The use-case comparison does not
need Phase 2 — it needs one funnel that is measured the same way for all five pages.
Phase 2 adds reach, not comparability.

The two phases share the same `use_case` id, the same campaign names and the same
`UserAcquisition` table, so the Phase 1 work is not thrown away.

## 5. The use-case dimension

Give each page a stable id. This id is the join key in every system.

| Route | `use_case` id |
|---|---|
| `/` | `home` |
| `/for-ai-engineers` | `ai_engineers` |
| `/for-education` | `education` |
| `/for-communities` | `communities` |
| `/for-work` | `work` |
| `/for-families` | `families` |

The id comes from the route, not from a URL parameter. An organic visitor therefore gets
the same label as a visitor from an ad.

**In Meta, use one campaign per use case.** Meta breaks results down by campaign, ad set
and ad without extra work. A custom event parameter does not break down as well. Use this
name pattern:

```
BINDER | <use_case> | <objective> | <yyyy-mm>
```

For a fair comparison: use one ad set per campaign, a fixed budget per campaign
(no campaign budget optimisation), the same creative frame, and the same audience.
Do not use Advantage+ for the comparison test — it mixes audiences and the result is
not attributable to the page.

## 6. Event map

| # | Step | Fired from | Meta event | Key parameters |
|---|---|---|---|---|
| 1 | Landing page open | browser pixel | `PageView` | — |
| 2 | Use-case page open | browser pixel | `ViewContent` | `content_name = <use_case>` |
| 3 | CTA click to the app | browser pixel | `Lead` | `use_case`, `destination` (`web`/`ios`/`android`) |
| 4 | Sign-in started (OTP sent) | server, Conversions API | `InitiateCheckout` | `use_case` |
| 5 | Account created | server, Conversions API | `CompleteRegistration` | `use_case`, `content_name` |

Notes:

* Optimise the campaign for **`CompleteRegistration`** when the volume allows it. Meta
  needs about 50 conversions per ad set per week to leave the learning phase. Until then,
  optimise for `Lead` (step 3), which has much more volume.
* Steps 4 and 5 are server-only, so deduplication is not needed. If a client event is
  ever added for the same step, send the same `event_id` from both sides.

## 7. The attribution chain

This is the part that makes the funnel one funnel and not two.

```
Meta ad click
   │  URL carries ?fbclid=…&utm_*=…
   ▼
Landing page  (binder-landingpage)   ← Phase 1, built
   │  1. Pixel fires. Meta writes _fbp and _fbc on .heybinder.com.
   │  2. An attribution object is built and stored in localStorage:
   │     { v, uc, t, fbc, s, m, c, ct, tm, r }  — last paid touch wins
   │  3. The web-app CTA gets ?hb_a=<base64url(payload)> appended,
   │     where payload = attribution + uce (the page clicked from).
   │     Store links are left alone — a browser cannot follow an install.
   ▼
Web app  (binder-flutter, web build)
   │  4. main.dart already captures Uri.base before the router rewrites it.
   │     Parse hb_a there and hold it in memory + localStorage.
   ▼
Sign-in  (POST /api/v3/auth/sign-in/{phone,email}-otp → { isNewUser })
   │  5. When isNewUser is true, the client POSTs the attribution once.
   ▼
Backend  (binderr_be)
   6. Store it in a new UserAcquisition row.
   7. Send CompleteRegistration to the Meta Conversions API with
      fbc (from the payload), _fbp (from the request cookie),
      hashed email/phone, client IP, client user agent.
```

`fbc` is built from `fbclid` in the format `fb.1.<unix_ms>.<fbclid>`.

**`_fbp` is not in the payload.** Meta writes that cookie on the registrable
domain, so `web.heybinder.com` and any API on a `heybinder.com` subdomain read it
from the request. Putting it in the URL would instead race the pixel's own
script load, and produce a link built before the cookie exists. `fbc` travels in
the payload because it comes from the ad URL and is present on the first frame.
The one cost: Safari caps a script-written cookie at 7 days, so `_fbp` can expire
before a slow converter returns — `fbc` and the UTM tags do not, and they are
what the campaign report joins on.

**Why the URL is still the mechanism.** Production runs the landing page on
`heybinder.com` and the web app on `web.heybinder.com`. Both share one registrable
domain, so the pixel's `_fbp` and `_fbc` cookies **are** readable on both hosts. That
helps, but it does not replace the URL: no Meta cookie carries the `use_case` id or the
UTM tags, and the `use_case` id is the whole comparison. The URL carries everything in
one place, and it also keeps a GitHub Pages preview build
(`goakal.github.io/binder-landingpage/`, still configured in `vite.config.ts`) working.

**Confirmed and taken.** The production API is `api.heybinder.com`, a `heybinder.com`
subdomain, and `dio_platform_web.dart:20` already sets `withCredentials = true`. So the
browser sends `_fbp` and `_fbc` to the backend by itself, and the route reads them from
`req.cookies` rather than the body. The client carries neither, and cannot be trusted
with them anyway.

**Do not put a Meta Pixel inside the Flutter app.** The Conversions API with the
forwarded `fbp`/`fbc` gives the same match quality, and it keeps a tracker out of the
product for users who are already registered.

## 8. Changes per repository

### `binder-landingpage` — **built, Phase 1**

| File | Change |
|---|---|
| `src/lib/analytics/use-case.ts` | new — pure: route path → `use_case` id. Named `resolveUseCase`, because `useX` reads as a React hook to the lint rule |
| `src/lib/analytics/attribution.ts` | new — pure: capture a touch, encode and decode the URL payload. Owns the cross-repo contract |
| `src/lib/analytics/pixel.ts` | new — the only place `fbq` is named. No-ops when the pixel id is empty. No consent gate (section 10) |
| `src/components/Analytics.tsx` | new — fires `PageView` + `ViewContent` per route, beside `<ScrollToTop>` inside the router |
| `src/hooks/use-app-links.ts` | new — the three product links plus `trackExit`; rewrites the web URL only |
| `src/components/marketing/CtaSection.tsx` | web button uses `webUrl`, fires `Lead` |
| `src/components/marketing/DownloadModal.tsx` | store buttons fire `Lead`; their URLs are unchanged |
| `src/App.tsx` | mount `<Analytics />` |
| `src/pages/PrivacyPolicy.tsx` | new "Cookies and Advertising on Our Website" section |
| `scripts/check-analytics.mjs` | new — `npm run check:analytics`. No new dependency |
| `.env.example` | `VITE_META_PIXEL_ID` |

`links.ts` was deliberately left as a list of constants: those URLs also answer "where
does the product live", which has nothing to do with tracking.

**Not wired:** `/short`, `/story`, `/clean` and `/old` hold their own hardcoded product
links. No marketing page links to them, so a visitor cannot browse into one, and no ad
points at one. They still fire `PageView` as `other`. Wire them if they ever become ad
targets.

### `binder-flutter` (web build) — **built, Phase 2**

| File | Change |
|---|---|
| `lib/core/analytics/acquisition.dart` | new — pure token extraction plus a SharedPreferences store. **Never parses the token** |
| `lib/main.dart` | capture from `DeeplinkService.initialWebUri`, in the window the invite code already depends on |
| `lib/features/auth/auth_repository.dart` | `postAcquisition(String)` |
| `lib/features/auth/acquisition_reporter.dart` | new — when a token is spent: kept through a network failure, dropped once the server answers |
| `lib/features/auth/auth_controller.dart` | reports from `onSignedIn`, unawaited |
| `test/acquisition_test.dart` | 8 unit tests for the parser |

The app carries the token opaquely. That keeps the payload shape to one reader
(`binderr_be`), so a new field never needs a matching change in Dart.

`onSignedIn` rather than the OTP screen: every path ends there, so SSO and the OAuth
callback are covered too, and `isNewUser` never has to be plumbed through the flow. The
server already ignores the call for an account that is not newly created.

### `binderr_be` — **built, Phase 2**

| File | Change |
|---|---|
| `prisma/migrations/20260907120000_add_user_acquisition/` | new `user_acquisitions` table. `user_id` is the primary key, so one row per user is a constraint, not a check. Cascades with the account |
| `src/lib/acquisition/payload.ts` | new — decodes the `hb_a` token. The only reader of its shape |
| `src/services/meta/conversions.ts` | new — the Conversions API client: SHA-256 hashing, deterministic `event_id`, logs through `logger`, never throws |
| `src/use-cases/acquisition/record-acquisition.usecase.ts` | new — writes the row, builds the `CompleteRegistration` event |
| `src/app/api/v3/account/acquisition/route.ts` | new — POST, authenticated. Fires the event through `waitUntil` |
| `src/validators/v3/acquisition.ts` | new — Yup schema, one bounded string |
| `src/utils/request-ip.ts` | `extractIpFromRequest` moved out of the agent-registration module now that two callers need it |
| env | `META_PIXEL_ID`, `META_CAPI_ACCESS_TOKEN`, `META_CAPI_TEST_EVENT_CODE`, `META_GRAPH_API_VERSION` |

**No repository.** The write is a single insert on one model, and `CLAUDE.md` is explicit
that a 1:1 prisma pass-through earns nothing. `account/timezone` is the same call made the
same way.

**Why a separate endpoint and not the Better Auth hook:** the hook runs inside
authentication and has no access to what the landing page put in the URL. Making it care
would put marketing data on the critical path of every login.

**Spoofing:** the payload comes from the client, so it can be false. Two limits bound it —
one row per user by primary key, and ignored once the account is older than 30 minutes, so
an old account cannot be back-dated into a campaign. Past those the worst case is a wrong
row in a marketing table.

**`rawEmail`, not `email`.** `modifyUserEmail` strips the dots from a Gmail address before
storing it, and Meta matches on the address the person actually typed. Hashing the
normalised one would have quietly missed every Gmail user.

## 9. Meta setup checklist (no code)

1. Create the dataset (pixel) in Events Manager. Note the pixel id.
2. Generate a Conversions API access token for the same dataset.
3. Verify the domain `heybinder.com` in Business Manager. This is needed for Aggregated
   Event Measurement on iOS.
4. Configure the 8 web event priorities. Put `CompleteRegistration` first.
5. Create one campaign per use case with the naming pattern of section 5.
6. Test with the Test Events tool before the first ad goes live.

## 10. Privacy

**No consent banner.** This is decided for the current target market, so the pixel loads
on page load and `pixel.ts` needs no consent gate. Two conditions apply:

* Revisit this if the ads ever target the EU or the UK. There, a banner with prior
  consent is required, and the pixel must not load before the visitor agrees. The
  `pixel.ts` seam keeps that a one-file change.
* A banner is not needed, but a notice still is.

The remaining obligations:

* Update `/privacy` on the landing page: name Meta as a processor, name the pixel and the
  cookies, and explain the purpose.
* Never send a raw email or phone number to Meta. Hash with SHA-256, lower case and
  trimmed first.
* `/data-deletion` must also delete the `UserAcquisition` row.

## 11. How to compare the use cases

**In Meta Ads Manager** — one row per campaign:
cost per `Lead`, cost per `CompleteRegistration`, `Lead → CompleteRegistration` rate.

**In our own database** — the true funnel, and the part Meta cannot give:

```sql
SELECT use_case,
       COUNT(*)                                      AS registrations,
       COUNT(*) FILTER (WHERE utm_source = 'meta')   AS from_meta
FROM user_acquisition
GROUP BY use_case;
```

The first-party table also answers **what happens after registration** — activation,
retention at day 7, messages sent. Meta cannot answer that. This is the strongest reason
to build the table and not to trust Ads Manager alone.

Expect a difference between the two numbers. Meta counts by its attribution window
(7-day click, 1-day view) and by its own matching. Our table counts what happened.
Use Meta for the buying decision, and use the table for the truth.

## 12. Effort

| Phase | Work | Estimate |
|---|---|---|
| 0 | Meta setup, domain verification, naming | 0.5 day |
| 1 | Landing page pixel and attribution | 2–3 days ✅ built |
| 2 | Backend table + Conversions API, web app capture | 2–3 days ✅ built |
| 3 | Privacy policy text (no consent banner) | 0.5 day ✅ built |
| 4 | Mobile install attribution (second project) | 3–5 days |

## 13. Decisions — all answered

1. **Where do the ads point?** Both, web funnel first. Phase 1 ships first and carries
   the use-case comparison. Phase 2 (mobile installs) follows as a separate project.
2. **Which domain serves production?** `heybinder.com` for the landing page,
   `web.heybinder.com` for the app. One registrable domain — see section 7.
3. **Can a person register fully on the web app?** Yes. Phase 1 is a complete funnel.
4. **Consent model?** No banner. A privacy notice only — see section 10.

5. **Production API host?** `api.heybinder.com` — a `heybinder.com` subdomain, so the
   backend reads `_fbp`/`_fbc` from the request cookies (section 7).

Phases 1–3 are built. What is left is operational, not code: create the dataset, generate
the Conversions API token, verify the domain, set the event priorities, and set
`VITE_META_PIXEL_ID` / `META_PIXEL_ID` / `META_CAPI_ACCESS_TOKEN` (section 9). Everything
stays inert until those are set.
