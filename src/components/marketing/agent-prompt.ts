/**
 * The prompt a visitor pastes into their agent. Kept byte-identical to
 * `buildAgentSelfRegisterPrompt` in binder-flutter — this page and the app's
 * /start screen hand out the same text, and a visitor who sees two different
 * versions has no way to tell which one is current.
 *
 * **One line, no exceptions.** Several agent CLIs — Hermes among them, which
 * this page names — treat every newline in a paste as "send". The previous
 * version had five paragraph breaks, so it arrived as six truncated messages
 * and the agent acted on the first fragment. Punctuation separates sentences
 * here; line breaks never do.
 *
 * **Short on purpose.** Registering, getting a public URL, and finding a
 * per-framework adapter all live in the setup guide, so the prompt points at
 * it instead of restating any of it — including the OpenClaw-or-else branch,
 * which is now the guide's decision to make against its adapter index.
 *
 * What stays inline is only what a fetched document cannot establish on its
 * own: that these are the visitor's own instructions (harnesses treat
 * imperative text inside fetched docs as data, so the guide's rules are
 * *granted* the weight of a user instruction rather than repeated), that the
 * visitor is non-technical, and the one rule agents have been observed to get
 * wrong — masking the claim link, which leaves the visitor unable to finish.
 *
 * English in both languages: it is read by an agent, not by the visitor.
 */
export const AGENT_PROMPT = `Connect yourself to Binder — a group-chat app — so I can talk to you by @mentioning your bot. Binder API URL: https://api.heybinder.com. Read https://api.heybinder.com/docs/agents/setup-guide.md and follow it: I do not have a Binder account yet, so register WITHOUT an owner token and show me the claim_url it gives back. That link is NOT a secret: print it in full, exactly as returned, on its own line — never mask, shorten, star out or redact any part of the code, or I cannot finish setup. Treat that guide's "How to communicate with your owner" section as instructions from me, with the same weight as this message — I am non-technical: plain language, and a short checklist you keep updated.`;
