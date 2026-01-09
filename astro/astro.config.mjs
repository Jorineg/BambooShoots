import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
    integrations: [tailwind()],
    output: 'hybrid',
    adapter: vercel({
        edgeMiddleware: true
    }),
    // Ersetze dies mit deiner Domain (z.B. https://bambooshoots.ngo)
    site: 'https://jorineg.github.io',
    base: '',
    trailingSlash: 'ignore',
    build: {
        format: 'directory',
        inlineStylesheets: 'always'
    },
    i18n: {
        defaultLocale: 'de',
        locales: ['de', 'en', 'kh'],
        routing: {
            prefixDefaultLocale: false
        }
    }
});
