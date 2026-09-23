/** Every outbound product link the marketing pages point at, in one place. */

export const APP_STORE_URL = 'https://apps.apple.com/id/app/binder-chat/id6749217579';
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.akal.binder&pcampaignid=web_share';
export const WEB_APP_URL = 'https://web.heybinder.com/';

/**
 * One Branch link standing in front of both stores, when it is configured.
 *
 * Empty is the normal state, and it must stay harmless: the store buttons then
 * point straight at the stores, exactly as they did before Phase 2 existed.
 *
 * Branch routes by user agent, so one link serves iOS and Android. That makes
 * `$desktop_url` on the Branch link load-bearing — set it to the web app, or a
 * desktop visitor who clicks "Download" lands on a Branch error page instead of
 * the store page they used to get. See `docs/meta-ads-tracking-plan.md` §14.3.
 */
export const BRANCH_DOWNLOAD_URL: string = import.meta.env.VITE_BRANCH_DOWNLOAD_URL ?? '';
