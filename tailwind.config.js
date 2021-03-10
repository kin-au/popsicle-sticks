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
      borderColor: ["checked", "hover"],
      borderWidth: ["checked", "hover", "focus" /*, "group-focus" */],
      cursor: ["disabled", "hover"],
      opacity: ["disabled"],
      outline: ["focus" /*, "group-focus" */],
      ringColor: ["focus" /*, "group-focus" */],
      ringWidth: ["focus" /*, "group-focus" */],
      textColor: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
  // corePlugins: {
  //   preflight: false,
  // },
};
