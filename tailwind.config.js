/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // The site's type scale: seven named steps, used everywhere instead of
    // Tailwind's default text-xs..text-9xl. Sized up for a mature audience
    // (nothing below 16px, body at 18px). The larger steps are fluid, so they
    // scale smoothly between ~375px phones and ~1280px desktops.
    fontSize: {
      small: ['1rem', { lineHeight: '1.5rem' }], // labels, badges, footer, meta
      body: ['1.125rem', { lineHeight: '1.55' }], // paragraphs, lists, nav, buttons
      lead: [
        'clamp(1.25rem, 1.198rem + 0.221vw, 1.375rem)',
        { lineHeight: '1.5' },
      ], // intro paragraphs, card & panel titles
      quote: [
        'clamp(1.5rem, 1.344rem + 0.663vw, 1.875rem)',
        { lineHeight: '1.45' },
      ], // testimonial quotes, blog subheads
      accent: [
        'clamp(2.25rem, 2.044rem + 0.884vw, 2.75rem)',
        { lineHeight: '1.15' },
      ], // reviewer names, stats, blog titles
      heading: ['clamp(3rem, 2.793rem + 0.884vw, 3.5rem)', { lineHeight: '1' }], // section headings (script font)
      display: ['clamp(3.5rem, 2.878rem + 2.652vw, 5rem)', { lineHeight: '1' }], // page titles (script font)
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontSize: '1.125rem',
            lineHeight: '1.6',
          },
        },
        // Used only on blog posts via `prose prose-blog`: heading sizes and
        // fixed rem spacing (prose's default em margins explode at large
        // sizes). Kept out of DEFAULT so other `prose` blocks are unaffected.
        blog: {
          css: {
            h2: {
              fontSize: 'clamp(1.5rem, 1.344rem + 0.663vw, 1.875rem)',
              fontWeight: '500',
              lineHeight: '1.25',
              marginTop: '2.5rem',
              marginBottom: '0.75rem',
            },
            h3: {
              fontSize: 'clamp(1.25rem, 1.198rem + 0.221vw, 1.375rem)',
              fontWeight: '600',
              lineHeight: '1.4',
              marginTop: '2rem',
              marginBottom: '0.5rem',
            },
            strong: { fontWeight: '600' },
          },
        },
      },
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
