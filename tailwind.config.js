module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'violet': 'hsl(263, 55%, 52%)',
        'dark-grayish-blue': 'hsl(217, 19%, 35%)',
        'dark-blackish-blue': 'hsl(219, 29%, 14%)',
        'light-gray': 'hsl(0, 0%, 81%)',
        'light-grayish-blue': 'hsl(210, 46%, 95%)',
      },
      fontFamily: {
        'ch': ['Barlow Semi Condensed', 'sans-serif'],
      },
      fontSize: {
        'sm': '13px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
