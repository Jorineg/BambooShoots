import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
    const { url, request, redirect } = context;
    const pathname = url.pathname;

    // 1. Skip assets, internal paths, and localized paths
    // This is the strongest protection against redirect loops
    const segments = pathname.split('/').filter(Boolean);
    if (pathname.includes('.') ||
        pathname.startsWith('/_') ||
        (segments.length > 0 && ['en', 'kh'].includes(segments[0]))) {
        return next();
    }

    // 2. Only handle the absolute root /
    if (pathname === '/' || pathname === '/index.html') {
        // High-speed browser language detection
        const acceptLanguage = request.headers.get('accept-language');

        // If no language info, just show default (German)
        if (!acceptLanguage) return next();

        const al = acceptLanguage.toLowerCase();

        // Check for Khmer first
        if (al.includes('kh') || al.includes('km')) {
            return redirect('/kh/', 302);
        }

        // Check for English
        if (al.includes('en')) {
            return redirect('/en/', 302);
        }
    }

    return next();
});
