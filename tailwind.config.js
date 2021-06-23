module.exports = {
	purge: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundColor: {
			primary: '#1b1c1c',
			secondary: '#232526',
			tertiary: '#131313',
			'tertiary-hov': '#1a1a1a',
			'tertiary-act': '#1d221d',
			black: '#000000',
			white: '#ffffff',
		},
		textColor: {
			primary: '#d9d9db',
			secondary: '#a0a0a0',
			highlight: '#9be4b4',
			select: '#e6ffff',
		},
		fontFamily: {
			main: ['Roboto'],
			mono: ['Roboto Mono'],
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
