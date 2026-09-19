# Reply to Google OAuth verification — AI/ML (Limited Use) request

Draft reply to the Third-Party Data Safety Team. Fill every `[BRACKET]` before
you send it: those are facts only the account holder can confirm (plan tier,
Zero Data Retention status, contract terms). Send it as a direct reply to the
verification email, so it stays on the same thread.

Related changes:

- Privacy policy (`src/pages/PrivacyPolicy.tsx`) — names the approved providers,
  their endpoints, and the no-aggregator rule.
- Backend (`goakal/binderr_be`,
  `src/modules/agent-mcp/lib/google-data-policy.ts`) — the allowlist the app
  enforces, with the two gates that apply it.

---

## Before you send: DeepSeek

DeepSeek is the weak point of this reply. Its published policy says that inputs
to its first-party API can be used to train and improve its models, and it
publishes no Zero Data Retention tier. Under Google's Limited Use terms, that
makes DeepSeek unacceptable for Google user data unless you hold a separate
written agreement with DeepSeek that forbids training on the content and
forbids retention after the response.

Three options:

1. You hold such an agreement. State it in the table, and keep a copy: Google
   can ask for it.
2. You do not hold one. Remove DeepSeek from the table, and remove `DEEPSEEK`
   from `APPROVED_GOOGLE_DATA_PROVIDERS` in the backend before you reply. The
   provider stays available for features that do not touch Google user data.
3. You want to keep it and ask Google. Say in the reply that DeepSeek is
   included, and give the terms you rely on. Expect a follow-up question.

Do not send the reply with an unsupported claim in it. The list you give Google
is the list Google audits.

---

## Draft email

Subject: Re: OAuth verification — AI/ML disclosure for Binder

Hello,

Thank you for the review. Below is the complete list of the AI providers that
can receive Google user data in Binder, the plans we use, and the controls that
keep Google user data away from every other model.

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

| Provider | Service and endpoint | Plan / tier | Training and retention |
| --- | --- | --- | --- |
| OpenAI | OpenAI Platform API, `api.openai.com` | [PLAN, e.g. Paid usage tier N / Enterprise] | API inputs and outputs are not used to train OpenAI models. Zero Data Retention: [ENABLED on this account / NOT ENABLED] |
| Google | Gemini API, `generativelanguage.googleapis.com` | [Paid tier — confirm billing is enabled] | Paid Gemini API content is not used to improve Google products |
| DeepSeek | DeepSeek Open Platform API, `api.deepseek.com` | [PLAN] | [STATE THE COMMITMENT YOU HOLD — see the note below] |

Models: [LIST THE MODEL IDS IN USE, for example `gpt-...`, `gemini-...`,
`deepseek-...`]. Each model runs at the provider named above and nowhere else.

**3. Multi-model services and upstream models**

Binder does not send Google user data to an aggregator, a gateway, a model hub,
or a proxy, and it does not use a multi-model routing service for this data.
Every call that carries Google user data goes directly to one of the three
endpoints in the table above.

This is a technical restriction, not only a policy. The allowlist holds the
provider AND the permitted host, so an endpoint that merely speaks the same API
protocol, for example a router or a self-run proxy, is refused. Two gates apply
it:

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
