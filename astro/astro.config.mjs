import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    integrations: [tailwind()],
    output: 'static',
    // Ersetze dies mit deiner GitHub Pages URL (z.B. https://username.github.io/repo)
    // site: 'https://jorineggers.github.io/BambooShoots',
    site: 'https://www.bamboo-shoots.de',
    // base: '/BambooShoots', // Nur nötig, wenn keine eigene Domain genutzt wird
    i18n: {
        defaultLocale: 'de',
        locales: ['de', 'en', 'kh'],
        routing: {
            prefixDefaultLocale: false
        }
    }
});
