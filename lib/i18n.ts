export type Locale = 'nl' | 'en';

const routeMap = {
  home: { nl: '/', en: '/en' },
  contact: { nl: '/contact', en: '/en/contact' },
  services: { nl: '/diensten', en: '/en/services' },
  about: { nl: '/over-ons', en: '/en/about' },
  gallery: { nl: '/galerij', en: '/en/gallery' },
  testimonials: { nl: '/getuigenissen', en: '/en/testimonials' },
  laserHairRemoval: {
    nl: '/diensten/laser-ontharing',
    en: '/en/services/laser-hair-removal',
  },
  gelNails: {
    nl: '/diensten/gelnagels',
    en: '/en/services/gel-nails',
  },
  facials: {
    nl: '/diensten/gezichtsbehandelingen',
    en: '/en/services/facials',
  },
} as const;

function normalizePathname(pathname: string) {
  if (!pathname) {
    return '/';
  }

  return pathname.length > 1 && pathname.endsWith('/')
    ? pathname.slice(0, -1)
    : pathname;
}

export function getLocaleFromPath(pathname: string): Locale {
  return normalizePathname(pathname).startsWith('/en') ? 'en' : 'nl';
}

export function localizePath(pathname: string, locale: Locale) {
  const normalizedPath = normalizePathname(pathname);
  const mappedRoute = Object.values(routeMap).find(
    (entry) => entry.nl === normalizedPath || entry.en === normalizedPath
  );

  if (mappedRoute) {
    return mappedRoute[locale];
  }

  if (locale === 'en') {
    return normalizedPath === '/' ? '/en' : `/en${normalizedPath}`;
  }

  if (normalizedPath === '/en') {
    return '/';
  }

  return normalizedPath.replace(/^\/en(?=\/|$)/, '') || '/';
}

export function toggleLocalePath(pathname: string) {
  const locale = getLocaleFromPath(pathname);
  return localizePath(pathname, locale === 'en' ? 'nl' : 'en');
}
