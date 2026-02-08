/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#f90606',
        'background-light': '#f8f5f5',
        'background-dark': '#000000',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0px',
        lg: '0px',
        xl: '0px',
        full: '9999px',
      },
      fontWeight: {
        800: '800',
        900: '900',
      },
    },
  },
  plugins: [],
}
