module.exports = {
  mode: "jit",
  purge: ["*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "4.375rem",
    },
    extend: {
      fontFamily: {
        rubik: "'Rubik', sans-serif",
        raleway: "'Raleway', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
