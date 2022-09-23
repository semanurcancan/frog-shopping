/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      zIndex: {
        '2': '2',
      },
      width: {
        '128': '32rem',
      },
      height: {
        '128': '32rem',
      },
      blur: {
        xxs: '1px',
      }
    },
  },
  plugins: [],
}