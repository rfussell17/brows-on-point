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
        primary: {
          DEFAULT: '#322A30',
          light: '#F3F1EE',
          50: '#F8F7F8',
          100: '#EFECEE',
          200: '#DCD5DA',
          300: '#B9ACB6',
          400: '#8B7485',
          500: '#61515D',
          600: '#483C45',
          700: '#3D333A',
          800: '#382E35',
          900: '#322A30',
          950: '#211C20',
        },
        secondary: {
          DEFAULT: '#634C5A',
          50: '#F8F6F8',
          100: '#EFEBEE',
          200: '#DCD1D7',
          300: '#BCA9B5',
          400: '#957588',
          500: '#795D6E',
          600: '#634C5A',
          700: '#513E4A',
          800: '#3F313A',
          900: '#2E232A',
          950: '#1D161A',
        },
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
