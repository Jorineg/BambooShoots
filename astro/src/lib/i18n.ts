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

// Get current locale from URL or cookie
export function getLocale(url: URL): Locale {
    // Check URL parameter
    const urlLocale = url.searchParams.get('lang') as Locale;
    if (urlLocale && locales.includes(urlLocale)) {
        return urlLocale;
    }

    return defaultLocale;
}

// Build URL with locale parameter
export function localizedUrl(path: string, locale: Locale): string {
    if (locale === defaultLocale) {
        return path;
    }
    const separator = path.includes('?') ? '&' : '?';
    return `${path}${separator}lang=${locale}`;
}

// Navigation items
export const navigation = {
    de: [
        { label: 'Start', href: '#start' },
        { label: 'Mission', href: '#mission' },
        { label: 'Programme', href: '#programme' },
        { label: 'Team', href: '#team' },
        { label: 'Spenden', href: '#spenden' },
        { label: 'Geschichte', href: '/history' }
    ],
    en: [
        { label: 'Home', href: '#start' },
        { label: 'Mission', href: '#mission' },
        { label: 'Programs', href: '#programme' },
        { label: 'Team', href: '#team' },
        { label: 'Donate', href: '#spenden' },
        { label: 'History', href: '/history' }
    ],
    kh: [
        { label: 'ទំព័រដើម', href: '#start' },
        { label: 'បេសកកម្ម', href: '#mission' },
        { label: 'កម្មវិធី', href: '#programme' },
        { label: 'ក្រុម', href: '#team' },
        { label: 'បរិច្ចាគ', href: '#spenden' },
        { label: 'ប្រវត្តិ', href: '/history' }
    ]
};
