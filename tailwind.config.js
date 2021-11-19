module.exports = {
  purge: [
    './dist/**/*.{html,js}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0042f6',
      },
    }, 
    variants: {
      extend: {},
    },
    plugins: [],
  }
}