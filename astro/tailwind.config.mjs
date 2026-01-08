/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // NGO Branding - Natural bamboo/green tones
                bamboo: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                    950: '#052e16'
                },
                // Warm accent - Cambodian red/gold
                khmer: {
                    50: '#fdf4f3',
                    100: '#fce7e4',
                    200: '#fbd3cd',
                    300: '#f7b3a8',
                    400: '#f08575',
                    500: '#e55d4a',
                    600: '#d13f2c',
                    700: '#af3221',
                    800: '#912c1f',
                    900: '#782a20',
                    950: '#41120c'
                },
                // Neutral earth tones
                earth: {
                    50: '#faf8f6',
                    100: '#f3efe9',
                    200: '#e5ddd2',
                    300: '#d4c5b3',
                    400: '#bfa78e',
                    500: '#ae9073',
                    600: '#a17e63',
                    700: '#866753',
                    800: '#6e5547',
                    900: '#5a463c',
                    950: '#30241f'
                },
                // Semantic Aliases using modern RGB format for full opacity support
                primary: {
                    DEFAULT: 'rgb(var(--color-primary)/<alpha-value>)',
                    hover: 'rgb(var(--color-primary-hover)/<alpha-value>)',
                    active: 'rgb(var(--color-primary-active)/<alpha-value>)',
                },
                secondary: {
                    DEFAULT: 'rgb(var(--color-secondary)/<alpha-value>)',
                    hover: 'rgb(var(--color-secondary-hover)/<alpha-value>)',
                    active: 'rgb(var(--color-secondary-active)/<alpha-value>)',
                },
                branding: {
                    text: 'rgb(var(--color-text-main)/<alpha-value>)',
                    muted: 'rgb(var(--color-text-muted)/<alpha-value>)',
                    light: 'rgb(var(--color-text-light)/<alpha-value>)',
                    bg: 'rgb(var(--color-bg-page)/<alpha-value>)',
                    accent: 'rgb(var(--color-bg-accent)/<alpha-value>)',
                    earth: 'rgb(var(--color-bg-earth)/<alpha-value>)',
                    dark: 'rgb(var(--color-bg-dark)/<alpha-value>)',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Outfit', 'system-ui', 'sans-serif'],
                khmer: ['Noto Sans Khmer', 'sans-serif'],
                cursive: ['Caveat', 'cursive']
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-pattern': 'linear-gradient(135deg, rgb(var(--color-primary-active) / 0.9) 0%, rgb(var(--color-primary-hover) / 0.8) 100%)'
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'float': 'float 6s ease-in-out infinite'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                }
            }
        }
    },
    plugins: []
};
