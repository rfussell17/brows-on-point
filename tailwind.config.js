/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fancy: ['var(--font-hurricane)', 'sans-serif'],
        sans: 'system-ui, sans-serif',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        primary: '#2D2E2E',
        'primary-light': '#fefefe',
        'primary-mid': '#2D2E2E',
        'primary-dark': '#322A30',
        'secondary-dark': '#464C5D', //dark gray-blue
        tertiary: '#322A30',
        'tertiary-dark': 'oklch(21.2% 0.019 322.12)',
        dark: '#2D2327',
        light: '#fefefe',
      },
      // backgroundImage: {
      //   'gradient-dusk':
      //     'linear-gradient(to right, #FFFFFF, #E2E5E5, #C9CBCC, #BDBEC0)',
      // },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ... other plugins
  ],
}
