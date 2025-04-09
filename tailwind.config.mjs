/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				"main-frutiger": "url('../images/frutiger_0.jpg')",
				"icon-cipher": "url('../images/bill_cipher_human_sara.jpg')",
			},
			colors: {
				"primary": "var(--primario)",
			},
			screens: {
				'md-pero-no-tanto': '900px',
				xs: "420px",
				'2xs': "320px",
				'3xs': "280px"
			},
			animation: {
				'fade-in': 'fade-in 1s ease-in-out forwards',
				'open-menu': 'fade-in 300ms ease-in-out forwards',
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				}
			},
		},
	},
	plugins: [],
}
