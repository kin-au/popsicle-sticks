const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        "Noto Sans JP",
        // "Playfair Display",
        ...defaultTheme.fontFamily.sans,
      ],
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
      cursor: ["disabled"],
      opacity: ["disabled"],
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // },
};
