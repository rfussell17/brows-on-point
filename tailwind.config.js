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
        primary: '#322A30',
        secondary: '#634C5A',
        light: '#FEFEFC',
      },
      backgroundImage: {
        'gradient-browns': 'linear-gradient(to right, #322A30, #634C5A)',
        'gradient-browns-soft':
          'linear-gradient(135deg, #322A30, #634C5A, #FEFEFC)',
        'gradient-browns-glow':
          'radial-gradient(circle at top, #634C5A, #322A30)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ... other plugins
  ],
}
