const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-background": "var(--custom-background)",
        "custom-button": "var(--custom-button)",
        "custom-main-text": "var(--custom-main-text)",
        "custom-button-text": "var(--custom-button-text)",
        "custom-input-text": "var(--custom-input-text)",
        "custom-disabled-input": "var(--custom-disabled-input)",
        "custom-disabled-text": "var(--custom-disabled-text)",
        "custom-popsicle": "var(--custom-popsicle)",
        "custom-popsicle-text": "var(--custom-popsicle-text)",
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
      borderColor: ["checked", "disabled", "hover"],
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
