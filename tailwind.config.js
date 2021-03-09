const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Noto Sans KR", ...defaultTheme.fontFamily.sans],
      serif: ["Shippori Mincho", ...defaultTheme.fontFamily.serif],
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
      backgroundColor: ["disabled"],
      cursor: ["disabled"],
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
  // corePlugins: {
  //   preflight: false,
  // },
};
