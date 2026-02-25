export type Locale = 'de' | 'en' | 'kh';

export const locales: Locale[] = ['de', 'en', 'kh'];
export const defaultLocale: Locale = 'de';

export const localeNames: Record<Locale, string> = {
    de: 'Deutsch',
    en: 'English',
    kh: 'ភាសាខ្មែរ'
};

// Get localized text from Sanity object (supports legacy string format for migration)
export function t(
    localizedObject: { de?: string; en?: string; kh?: string } | string | undefined,
    locale: Locale
): string {
    if (!localizedObject) return '';
    // Handle legacy string format (for migration compatibility)
    if (typeof localizedObject === 'string') return localizedObject;
    return localizedObject[locale] || localizedObject[defaultLocale] || '';
}

// Get localized image object from Sanity object
export function ti(
    object: any | undefined,
    locale: Locale
): any {
    if (!object) return undefined;

    // If it's already a Sanity image (has an asset property), return it directly
    if (object.asset) return object;

    // Otherwise, try to get the localized version
    const img = object[locale] || object[defaultLocale];
    return (img && img.asset) ? img : undefined;
}

// Helper to get base path without trailing slash
const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

// Get current locale from URL path
export function getLocale(url: URL): Locale {
    const path = url.pathname;
    // Remove base path if present to get the "routing" path
    const relativePath = base && path.startsWith(base)
        ? path.slice(base.length)
        : path;

    const [, firstSegment] = relativePath.split('/');
    if (locales.includes(firstSegment as Locale)) {
        return firstSegment as Locale;
    }
    return defaultLocale;
}

// Build URL with locale path
export function localizedUrl(path: string, locale: Locale): string {
    // Handle anchor links
    if (path.startsWith('#')) {
        return localizedUrl('/', locale) + path;
    }

    // Remove existing locale prefix from path
    let segments = path.split('/').filter(Boolean);

    // If the first segment is the base path name (extracted from base), remove it
    const baseSegment = base.replace(/^\//, '');
    if (segments.length > 0 && segments[0] === baseSegment) {
        segments.shift();
    }

    if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
        segments.shift();
    }
    const cleanPath = '/' + segments.join('/');

    const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
    let result = `${base}${localePrefix}${cleanPath === '/' ? '' : cleanPath}`;

    // Ensure trailing slash for directory paths (not for anchor-only paths)
    if (!result.endsWith('/')) {
        result += '/';
    }

    return result;
}

// Navigation items
export const navigation = {
    de: [
        { label: 'Start', href: '#start' },
        { label: 'Programme', href: '#programme' },
        { label: 'Team', href: '#team' },
        { label: 'Spenden', href: '#spenden' },
        { label: 'Aktuelles', href: '/news' },
        { label: 'Geschichte', href: '/history' },
        { label: 'Galerie', href: '/galerie' }
    ],
    en: [
        { label: 'Home', href: '#start' },
        { label: 'Programs', href: '#programme' },
        { label: 'Team', href: '#team' },
        { label: 'Donate', href: '#spenden' },
        { label: 'News', href: '/news' },
        { label: 'History', href: '/history' },
        { label: 'Gallery', href: '/galerie' }
    ],
    kh: [
        { label: 'ទំព័រដើម', href: '#start' },
        { label: 'កម្មវិធី', href: '#programme' },
        { label: 'ក្រុម', href: '#team' },
        { label: 'បរិច្ចាគ', href: '#spenden' },
        { label: 'ព័ត៌មានថ្មី', href: '/news' },
        { label: 'ប្រវត្តិ', href: '/history' },
        { label: 'វិចិត្រសាល', href: '/galerie' }
    ]
};
