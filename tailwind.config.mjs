/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode:"class",
	theme: {
		extend: {
			backgroundImage:{
				"open-menu":"url('./public/open-menu.svg')",
				"close-menu":"url('./public/close-menu.svg')"
			}
		},
	},
	plugins: [],
}
