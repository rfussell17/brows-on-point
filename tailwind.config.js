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
        primary: '#62466B', //purple
        'primary-light': '#C9B5CF', //light purple
        'primary-mid': '#73667F',
        'primary-dark': '#45364B', //dark purple
        secondary: '#48639C', //gray-blue
        'secondary-light': '#95d9da', //light gray-blue
        'secondary-dark': '#464C5D', //dark gray-blue
        tertiary: '#B5C2B7', //light green
        'tertiary-dark': '#6E8772', //dark green
        dark: '#2D2327',
        light: '#F6F3F7',
        light2: '#F3F4F6',
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(to right, #875E6F, #73667F, #404A63)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ... other plugins
  ],
}
