/**
 * Behaviour checks for `src/lib/analytics`.
 *
 * The repository has no test runner, and the attribution payload is a contract
 * two other repositories parse (`binder-flutter` reads it in the web build,
 * `binderr_be` stores it and forwards it to Meta). A base64url round trip that
 * only ever runs across three repositories is a round trip nobody ever runs —
 * so it runs here instead.
 *
 *     npm run check:analytics
 *
 * No new dependency: esbuild comes with Vite, and the modules under test are
 * pure, so they need no DOM. Keep it that way — anything here that needs a
 * browser belongs in a real test runner, not in this file.
 */
import { build } from 'esbuild';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const out = mkdtempSync(join(tmpdir(), 'hb-analytics-'));

async function load(entry, name) {
  const outfile = join(out, name);
  await build({ entryPoints: [entry], bundle: true, format: 'esm', outfile, logLevel: 'error' });
  return import(pathToFileURL(outfile).href);
}

const { nextAttribution, encodeAttribution, decodeAttribution, withAttribution } = await load(
  'src/lib/analytics/attribution.ts',
  'attribution.mjs',
);
const { resolveUseCase } = await load('src/lib/analytics/use-case.ts', 'use-case.mjs');

let failures = 0;
const eq = (name, got, want) => {
  const g = JSON.stringify(got);
  const w = JSON.stringify(want);
  if (g === w) return console.log(`  ok   ${name}`);
  failures += 1;
  console.log(`  FAIL ${name}\n       got  ${g}\n       want ${w}`);
};

console.log('route → use case');
eq('home', resolveUseCase('/'), 'home');
eq('use-case page', resolveUseCase('/for-work'), 'work');
eq('trailing slash is the same page', resolveUseCase('/for-families/'), 'families');
eq('anything else is "other"', resolveUseCase('/story'), 'other');

console.log('\ncapturing a touch');
const adClick = nextAttribution({
  stored: null,
  useCase: 'work',
  now: 1000,
  search: '?fbclid=ABC123&utm_source=meta&utm_medium=paid_social&utm_campaign=binder_work_sep',
  referrer: 'https://l.facebook.com/x?y=1',
});
eq('fbc is built in the form the CAPI wants', adClick.fbc, 'fb.1.1000.ABC123');
eq('utm tags captured', [adClick.s, adClick.m, adClick.c], ['meta', 'paid_social', 'binder_work_sep']);
eq('referrer is reduced to its host', adClick.r, 'l.facebook.com');
eq('landing page recorded', adClick.uc, 'work');
eq(
  'a blank utm tag is not stored',
  nextAttribution({ stored: null, useCase: 'work', search: '?utm_source=&fbclid=A', referrer: '', now: 1 }).s,
  undefined,
);
eq(
  'an organic visit carries no click id',
  nextAttribution({ stored: null, useCase: 'home', search: '', referrer: 'https://www.google.com/', now: 4000 }).fbc,
  undefined,
);

console.log('\nlast paid touch wins');
eq(
  'browsing the site never overwrites the ad that paid for the visit',
  nextAttribution({ stored: adClick, useCase: 'families', search: '', referrer: '', now: 2000 }),
  adClick,
);
const secondClick = nextAttribution({
  stored: adClick,
  useCase: 'education',
  now: 3000,
  search: '?fbclid=XYZ&utm_source=meta&utm_campaign=binder_edu_sep',
  referrer: '',
});
eq(
  'a second ad click replaces the first',
  [secondClick.uc, secondClick.c, secondClick.fbc],
  ['education', 'binder_edu_sep', 'fb.1.3000.XYZ'],
);

console.log('\nurl round trip');
const unicode = nextAttribution({
  stored: null,
  useCase: 'communities',
  now: 5000,
  search: `?fbclid=Q1&utm_campaign=${encodeURIComponent('komunitas—sekolah ✅')}`,
  referrer: '',
});
const url = withAttribution('https://web.heybinder.com/', unicode, 'work');
const param = new URL(url).searchParams.get('hb_a');
const back = decodeAttribution(param);
eq('the parameter is url-safe', /^[A-Za-z0-9_-]+$/.test(param), true);
eq('a non-ASCII campaign name survives', back.c, 'komunitas—sekolah ✅');
eq('the click id survives', back.fbc, unicode.fbc);
eq('the landing page survives', back.uc, 'communities');
eq('the page the CTA was clicked from is added', back.uce, 'work');
eq('the url stays a sane length', url.length < 512, true);

console.log('\ndegrading safely');
eq(
  'no attribution leaves the url untouched',
  withAttribution('https://web.heybinder.com/', null, 'work'),
  'https://web.heybinder.com/',
);
eq('garbage decodes to null', decodeAttribution('!!!not-base64!!!'), null);
eq('a future payload version decodes to null', decodeAttribution(encodeAttribution({ v: 2, uc: 'work' })), null);

console.log(failures === 0 ? '\nAll checks passed.' : `\n${failures} check(s) failed.`);
process.exit(failures === 0 ? 0 : 1);
