import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
    const { url, request, redirect, locals } = context;

    // Only handle root redirect
    const pathname = url.pathname;

    // Check if we are at the absolute root / (or index)
    if (pathname === '/' || pathname === '/index.html') {
        const acceptLanguage = request.headers.get('accept-language');

        // Default to German
        let targetLocale = 'de';

        if (acceptLanguage) {
            // Check for English
            if (acceptLanguage.toLowerCase().includes('en')) {
                targetLocale = 'en';
            }
            // Check for Khmer
            else if (acceptLanguage.toLowerCase().includes('kh') || acceptLanguage.toLowerCase().includes('km')) {
                targetLocale = 'kh';
            }
        }

        // If the target is German, and we are at /, we can just stay here 
        // because prefixDefaultLocale is false (DE is at /).
        // However, if the target is NOT German, we redirect.
        if (targetLocale !== 'de') {
            return redirect(`/${targetLocale}/`, 302);
        }
    }

    return next();
});
