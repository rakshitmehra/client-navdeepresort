export const SITE_URL = 'https://navdeepresort.com';
export const WHATSAPP_NUMBER = '918567098852';

/** Absolute URL for a site path (hash allowed), e.g. `/packages#indoor-royal`. */
export function pageUrl(path = ''): string {
  return `${SITE_URL}${path}`;
}

/**
 * Builds a wa.me link. When `path` is given, the full page URL is appended to
 * the message so the team knows exactly which package/page the enquiry is for.
 */
export function whatsappLink(message: string, path?: string): string {
  const text = path === undefined ? message : `${message}\n\nPage: ${pageUrl(path)}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
