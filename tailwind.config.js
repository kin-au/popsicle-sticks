const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-background": "var(--custom-background)",
        "custom-button": "var(--custom-button)",
        "custom-main-text": "var(--custom-main-text)",
        "custom-button-text": "var(--custom-button-text)",
        "custom-disabled-input": "var(--custom-disabled-input)",
        "custom-popsicle": "var(--custom-popsicle)",
        "custom-link": "var(--custom-link)",
      },
    },
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
