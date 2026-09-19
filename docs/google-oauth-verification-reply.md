# Reply to Google OAuth verification — AI/ML (Limited Use) request

Draft reply to the Third-Party Data Safety Team. Fill every `[BRACKET]` before
you send it: those are facts only the account holder can confirm (plan tier,
the name of the DeepSeek dashboard setting, the model IDs, the CASA lab). Send
it as a direct reply to the verification email, so it stays on the same thread.

Related changes:

- Privacy policy (`src/pages/PrivacyPolicy.tsx`) — names the approved
  providers, their endpoints, and the no-aggregator rule.
- Backend (`goakal/binderr_be`,
  `src/modules/agent-mcp/lib/google-data-policy.ts`) — the allowlist the app
  enforces, with the two gates that apply it.

## Before you send

1. Confirm that model improvement stays switched OFF on the DeepSeek platform
   account whose key the deployment uses. That setting is the whole basis of
   the DeepSeek entry. Take a screenshot with the date: Google can ask for
   evidence.
2. Confirm the OpenAI account tier, and whether Zero Data Retention is active
   on it.
3. List the model IDs that the Google features can use.
4. Keep this page, the privacy policy and the backend allowlist identical. The
   list you give Google is the list Google audits.

---

## Draft email

Subject: Re: OAuth verification — AI/ML disclosure for Binder

Hello,

Thank you for the review. Below is the complete list of the AI providers that
can receive Google user data in Binder, the plans and settings we use, and the
controls that keep Google user data away from every other model.

**1. How Google user data reaches a model**

Binder is a chat application in which a user can connect their Google Account
to an AI agent. Gmail and Google Calendar content is served to the agent by an
MCP server that we host ourselves. The agent then sends the content it needs to
a model provider to produce the user's result. We do not train any model on
Google user data, and we do not let a third party train on it.

Binder lets a user choose a model provider for features that do not touch
Google user data. Google user data is an exception: the application gives the
Google tools to an agent only when that agent runs on one of the approved
providers below, at that provider's own API endpoint. The check runs on every
turn, against the agent's current configuration. If the agent is set to any
other provider, or to any other endpoint, the Google tools are not given to the
model, so no Google user data can reach it. The user cannot turn this off.

**2. List of third-party AI integrations**

These are the only providers that can receive Google user data:

| Provider | Service and endpoint | Plan / tier | Training and retention control |
| --- | --- | --- | --- |
| OpenAI | OpenAI Platform API, `api.openai.com` | [PLAN, e.g. Paid usage tier N / Enterprise] | OpenAI does not use API inputs or outputs to train its models. Zero Data Retention: [ACTIVE on this account / NOT ACTIVE] |
| DeepSeek | DeepSeek Open Platform API, `api.deepseek.com` | [PLAN] | Model improvement is switched off on our platform account ("[SETTING NAME AS IT APPEARS IN THE DASHBOARD]", disabled on [DATE]), so DeepSeek does not train on the content we send |

Models: [LIST THE MODEL IDS IN USE, for example `gpt-...` and `deepseek-...`].
Each model runs at the provider named above and nowhere else.

**3. Multi-model services and upstream models**

Binder does not send Google user data to an aggregator, a gateway, a model hub,
or a proxy, and it does not use a multi-model routing service for this data.
Every call that carries Google user data goes directly to one of the two
endpoints in the table above.

The configurations that restrict training are:

- **Account settings.** On DeepSeek, model improvement is switched off on the
  account whose API key the application uses. On OpenAI, API content is outside
  model training by default[, and Zero Data Retention is active on our
  account].
- **Endpoint routing rule.** The application holds an allowlist of the provider
  AND the permitted API host. A request that carries Google user data can only
  go to `api.openai.com` or `api.deepseek.com`. An endpoint that merely speaks
  the same API protocol, for example a router or a self-run proxy, is refused,
  so no call can be routed to an unknown downstream model.

Two gates apply the allowlist:

- the application refuses to attach a Google connection to an agent that runs
  on a provider or an endpoint that is not on the allowlist;
- before each turn, the application withholds the Google tools from an agent
  whose current provider or endpoint is not on the allowlist. An unknown
  configuration fails closed.

Both gates are unit tested, and the allowlist is a single source file, so the
behaviour is auditable in one place.

**4. CASA**

We note the ADA-CASA AL1 assessment and the date of 18 December 2026. We
[HAVE STARTED / WILL START] the assessment with [LAB NAME].

Please tell us if you need a new demonstration video, or any further detail.

Best regards,
[NAME]
[TITLE], Binder
