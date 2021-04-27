module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'beige-100': '#FDF0EE'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
