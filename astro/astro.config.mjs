import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
    integrations: [tailwind()],
    output: 'hybrid',
    adapter: vercel(),
    // Ersetze dies mit deiner Domain (z.B. https://bambooshoots.ngo)
    site: 'https://jorineg.github.io',
    base: '', // Moving to Vercel root
    trailingSlash: 'always',
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
