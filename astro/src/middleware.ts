import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
    const { url, request, redirect } = context;
    const pathname = url.pathname;

    // 1. Only intercept the absolute root
    if (pathname === '/' || pathname === '/index.html') {
        const acceptLanguage = request.headers.get('accept-language');

        if (acceptLanguage) {
            const al = acceptLanguage.toLowerCase();

            // Priority: Khmer -> English -> Default (German)
            if (al.includes('kh') || al.includes('km')) {
                return redirect('/kh/', 302);
            }
            if (al.includes('en')) {
                return redirect('/en/', 302);
            }
        }
    }

    // 2. Add a trace header to the response to see if middleware is running
    const response = await next();
    response.headers.set('x-bamboo-status', 'middleware-running');

    return response;
});
