/**
 * Single source of truth for anything that changes when the product ships.
 *
 * PLAY_STORE is null until the Android listing goes public. Verified 2026-07-13:
 * play.google.com/store/apps/details?id=uz.jihozla.app returns 404, so the site
 * shows "Tez orada" instead of a dead link. Fill in the URL and the button turns
 * into a real download link everywhere on the page.
 */
export const APP_STORE = "https://apps.apple.com/uz/app/jihozla/id6787715848";
export const PLAY_STORE: string | null = null;

export const TELEGRAM = "https://t.me/jihozla_rasmiy";

/** No support inbox exists yet, so the footer shows Telegram only. Set this to an
 *  address and the email row appears in the contact column. */
export const CONTACT_EMAIL: string | null = null;

/** Figures below come from a real project inside the app, not from marketing. */
export const PROOF = {
  detal: 95,
  teshik: 308,
  plita: "31.74",
  modul: 13,
} as const;
