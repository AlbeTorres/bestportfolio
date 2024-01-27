/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode:"class",
	theme: {
		extend: {
			backgroundImage:{
				"open-menu":"url('open-menu.svg')",
				"close-menu":"url('close-menu.svg')"
			}
		},
	},
	plugins: [],
}
