export type Locale = 'de' | 'en' | 'kh';

export const locales: Locale[] = ['de', 'en', 'kh'];
export const defaultLocale: Locale = 'de';

export const localeNames: Record<Locale, string> = {
    de: 'Deutsch',
    en: 'English',
    kh: 'ភាសាខ្មែរ'
};

// Get localized text from Sanity object
export function t(
    localizedObject: { de?: string; en?: string; kh?: string } | undefined,
    locale: Locale
): string {
    if (!localizedObject) return '';
    return localizedObject[locale] || localizedObject[defaultLocale] || '';
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

    const localePrefix = `/${locale}`;
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
        { label: 'Geschichte', href: '/history' },
        { label: 'Galerie', href: '/galerie' }
    ],
    en: [
        { label: 'Home', href: '#start' },
        { label: 'Programs', href: '#programme' },
        { label: 'Team', href: '#team' },
        { label: 'Donate', href: '#spenden' },
        { label: 'History', href: '/history' },
        { label: 'Gallery', href: '/galerie' }
    ],
    kh: [
        { label: 'ទំព័រដើម', href: '#start' },
        { label: 'កម្មវិធី', href: '#programme' },
        { label: 'ក្រុម', href: '#team' },
        { label: 'បរិច្ចាគ', href: '#spenden' },
        { label: 'ប្រវត្តិ', href: '/history' },
        { label: 'វិចិត្រសាល', href: '/galerie' }
    ]
};
