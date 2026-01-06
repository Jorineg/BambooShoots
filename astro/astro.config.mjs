import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    integrations: [tailwind()],
    output: 'static',
    // Ersetze dies mit deiner GitHub Pages URL (z.B. https://username.github.io/repo)
    site: 'https://jorineggers.github.io',
    base: '/BambooShoots',
    i18n: {
        defaultLocale: 'de',
        locales: ['de', 'en', 'kh'],
        routing: {
            prefixDefaultLocale: false
        }
    }
});
