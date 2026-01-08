import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    integrations: [tailwind()],
    output: 'static',
    // Ersetze dies mit deiner GitHub Pages URL (z.B. https://username.github.io/repo)
    site: 'https://jorineg.github.io',
    base: '/BambooShoots',
    trailingSlash: 'always',
    build: {
        format: 'directory'
    },
    i18n: {
        defaultLocale: 'de',
        locales: ['de', 'en', 'kh'],
        routing: {
            prefixDefaultLocale: false
        }
    }
});
