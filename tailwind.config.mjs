/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: { graydark: '#0d1117' },
      backgroundImage: {
        'open-menu': "url('./src/icons/open-menu.svg')",
        'close-menu': "url('./src/icons/close-menu.svg')",
      },
    },
  },
  plugins: [],
}
