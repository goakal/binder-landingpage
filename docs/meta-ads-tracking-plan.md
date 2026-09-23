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

### Phase 2 — mobile install funnel — **built, see section 14**

Branch, not the Meta SDK. The SDK, the native configuration and the deferred
deep-link plumbing are already in `binder-flutter`, and Branch is an approved Meta
Mobile Measurement Partner, so it covers both halves with no new tracker in the
product. Section 14 is the whole design.

The alternative, a Meta SDK with SKAdNetwork, is not built. It gives Meta a stronger
optimisation signal and costs an ATT prompt, App Store privacy disclosures and native
configuration on both platforms. Revisit it only if the Branch signal proves too thin
to optimise on.

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
| `src/utils/request-geo.ts` | new — city / region / postal / country from the Vercel edge headers, for the Meta match only. Never stored |
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
  trimmed first. The same rule covers the IP-derived city, region, postal code and
  country: they are hashed in `conversions.ts` and are never written to
  `user_acquisitions`, because an edge guess is not reliable enough to report on and
  the table does not need it to answer "which campaign".
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

---

## 14. Phase 2 — the mobile install funnel

Phase 1 measures a visitor who registers **in a browser**. A visitor who installs the
app is invisible to it: the store click is the last thing a browser pixel sees, and an
App Store install carries no URL.

This section closes that. It is built, and it is inert until the console setup in
§14.6 is done.

### 14.1 The one hard fact

Meta accepts app attribution from exactly two sources: **its own SDK**, or an
**approved Mobile Measurement Partner**. Branch is an approved MMP.

Nothing else works. In particular, sending `CompleteRegistration` from `binderr_be`
with `action_source: 'app'` does *not* work: a browser conversion is tied to an ad by
`fbc` and `fbp`, an app has neither, and an event carrying only a hashed email reaches
Meta but cannot be attributed to a campaign. Campaign attribution is the whole
comparison, so an unattributed event is worth nothing here.

**The event was never the hard part. The attribution link is.**

### 14.2 Two problems, solved separately

Branch answers two different questions, and they need different setup. Build both;
know which is which.

| | Answers | Needs Meta setup | Works when |
|---|---|---|---|
| **Deferred deep link** | "which landing page produced this account", in *our* database | No | The visitor came through `heybinder.com` |
| **Branch as Meta MMP** | the same, in Ads Manager, and lets Meta **optimise** | Yes | Any install, including a direct App Install campaign |

The first is what answers the original question. The second is what lets Meta bid on
it.

### 14.3 The chain

```
Meta ad  ──►  heybinder.com  ──►  Branch link  ──►  App Store / Play Store
                   │                   │
                   │  hb_a token       │  Branch holds the token against the device
                   ▼                   ▼
            (Phase 1 pixel)      install, first launch
                                       │
                                       │  listSession() replays the link data,
                                       │  hb_a included — this is the deferred
                                       │  deep link, and it is Branch's core job
                                       ▼
                                 AcquisitionStore (native)
                                       │
                                       │  spent at the next sign-in, exactly as
                                       │  on web — same reporter, same endpoint
                                       ▼
                                 POST /api/v3/account/acquisition
                                       │  { payload, source: 'app' }
                                       ▼
                                 user_acquisitions row
```

The store links are no longer bare store URLs when `VITE_BRANCH_DOWNLOAD_URL` is set.
They point at one Branch link that carries `hb_a`, and Branch routes by user agent.

**Set `$desktop_url` on that Branch link to the web app.** A desktop visitor who
clicks "Download" reaches Branch, not the App Store, and the web app is the right
answer for them. Leaving it unset sends them to a Branch error page.

### 14.4 Who reports to Meta, and who must not

A registration that came through the app is reported to Meta **by Branch**, as the
MMP. `binderr_be` must not also send it through the Conversions API — Meta would
count the same registration twice, because the two events carry different
`event_id`s and different `action_source`s and cannot be deduplicated.

So the endpoint takes a `source`:

| `source` | Row written | Conversions API event | Reported to Meta by |
|---|---|---|---|
| `web` (default) | yes | **yes** | `binderr_be` |
| `app` | yes | **no** | Branch |

The first-party table is written either way, so the SQL in §11 answers for both
platforms without knowing which is which.

### 14.5 Which registrations fire the Branch event

`COMPLETE_REGISTRATION` is Branch's standard event, and the MMP integration forwards
it to Meta. It must fire **once per new account** — firing on every sign-in would
report a registration every time somebody logs in.

The signal is the server's own `is_new_user`, recorded at OTP verification and read
back at `onSignedIn`. It is not `isSignup`: that flag says which button the person
tapped, and an existing user who taps "Sign up" is still not a registration.

**Known gap: SSO and the OAuth callback.** Those paths do not return `is_new_user`,
so a registration through them writes its `user_acquisitions` row but fires no Branch
event. In the last 30 days social sign-in was 64 requests against 1,690 for email
OTP, so this is small — but it is a real undercount, and it is the first thing to fix
if the Ads Manager number reads low against the table.

### 14.6 Console setup (no code)

Everything above is inert until these are done.

1. **Branch → a download link.** Create one Quick Link for the landing page CTA. Set
   its iOS and Android destinations, and set `$desktop_url` to `https://web.heybinder.com/`.
   Put the link in `VITE_BRANCH_DOWNLOAD_URL` in the Netlify build environment.
   Vite inlines it at build time, so a **rebuild** is needed, not a redeploy.
2. **Confirm Branch forwards custom link parameters.** The design assumes `?hb_a=…`
   on a Branch link comes back in `listSession()`. Verify it on a real device before
   trusting the numbers — a deferred deep link cannot be tested in a simulator.
3. **Meta → register the app.** Create the app in Meta's developer portal and note
   the Facebook App ID. Add it to the Branch dashboard.
4. **Meta → link Branch as the MMP** for that app, in Business Manager.
5. **Branch → enable the Meta Ads integration** and map `COMPLETE_REGISTRATION` to
   Meta's `CompleteRegistration`.
6. **iOS → configure SKAdNetwork** in Branch, and decide about ATT (§14.7).
7. **Campaigns.** The same rule as §5: one campaign per use case. On mobile the
   `use_case` id cannot travel as a parameter through a store install for a direct
   App Install campaign, so the campaign name *is* the dimension.

Meta's MMP terms and the iOS measurement rules move often. Confirm each step against
Meta's own documentation rather than this list.

### 14.7 iOS and Android are not comparable

**Android is deterministic.** The Play Install Referrer carries the referrer through
the install. Branch reads it. The numbers are trustworthy.

**iOS is not.** Without ATT consent there is no IDFA, so attribution falls back to
SKAdNetwork: aggregated, delayed by a day or more, and coarse. An ATT prompt raises
the match rate and costs an app update, App Store privacy disclosures, and most
people decline it anyway.

Design the comparison so it does not depend on iOS precision. Compare use cases
**within** a platform, never across one.

### 14.8 Changes per repository

#### `binder-landingpage`

| File | Change |
|---|---|
| `src/components/marketing/links.ts` | `BRANCH_DOWNLOAD_URL` from `VITE_BRANCH_DOWNLOAD_URL`. Empty keeps the bare store URLs, so the site behaves exactly as before until it is set |
| `src/hooks/use-app-links.ts` | store URLs carry `hb_a` through the Branch link when one is configured |
| `scripts/check-analytics.mjs` | round-trip cases for the store links, both configured and not |
| `.env.example` | `VITE_BRANCH_DOWNLOAD_URL` |

#### `binder-flutter`

| File | Change |
|---|---|
| `lib/core/analytics/acquisition.dart` | `captureToken` (platform-independent) beside the web-only `captureFrom`; pure `acquisitionTokenFromBranchParams`; the new-registration flag |
| `lib/core/deeplink/deeplink_service.dart` | `onAcquisitionToken` callback, fired from `_handleBranchParams`. The service still knows nothing about the acquisition feature |
| `lib/main.dart` | wires that callback to the store |
| `lib/features/auth/auth_repository.dart` | `postAcquisition` sends `source` — `web` or `app`, from `kIsWeb` |
| `lib/features/auth/registration_events.dart` | new — the only place Branch's event API is named |
| `lib/features/auth/auth_controller.dart` | `onSignedIn` fires the event when the flag is set |
| `lib/features/auth/otp_verification_screen.dart` | records `is_new_user` at the one moment the server states it |

#### `binderr_be`

| File | Change |
|---|---|
| `src/validators/v3/acquisition.ts` | optional `source`, `web` by default |
| `src/use-cases/acquisition/record-acquisition.usecase.ts` | writes the row for both; suppresses the Conversions API event for `app` |
| `src/app/api/v3/account/acquisition/route.ts` | passes `source` through |

**No migration.** `user_acquisitions` does not record the platform. The log line does,
which is enough to start. Add a column only once there is a question the logs cannot
answer — it costs a migration that has to be applied by hand before merge.

### 14.9 Do not start this before Phase 1 reports

Phase 1 has not yet produced one attributed registration. Until the `reason` logging
says why, a second funnel on top of it makes both harder to debug.
