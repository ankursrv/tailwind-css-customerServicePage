/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '42px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      xxl:'1440px',
    },
    fontFamily: {
      primary: ["Inter", 'sans-serif'],
      secondary: ['Jost', 'system-ui'],
    },
    backgroundImage: {
      hero: 'url(../assets/hero/bg.webp)',
      grid: 'url(../assets/grid.png)',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#111928',
          hover: '#343e4a',
          secondary: '#F3F4F6',
        },
        secondary: '#637381',
        accent: {
          DEFAULT: '#cda274',
          secondary: '#3758F9',
          hover: '#b88c5d',
        },
      },
    },
  },
  plugins: [],
}