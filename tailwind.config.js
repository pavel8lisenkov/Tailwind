/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1134px',
      },
      colors: {
        'gray-dark': '#B5B2B2',
        'gray': '#E8E8E8',
        'gray-light': '#F5F5F5',
        'deep-purple': '#7840B0',
      },
      fontFamily: {
        Roboto: 'Roboto'
      },
    },
  },
  plugins: [],
}

