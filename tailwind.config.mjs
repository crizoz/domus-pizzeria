/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,sgn,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        'bg-alt': 'var(--color-bg-alt)',
        surface: 'var(--color-surface)',
        accent: 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        cream: 'var(--color-cream)',
        'cream-muted': 'var(--color-cream-muted)',
        border: 'var(--color-border)',
        gold: 'var(--color-gold)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
