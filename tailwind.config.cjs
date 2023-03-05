/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#FE7B43",
          secondary: "#667085",
          accent: "#667085",
          neutral: "#667085",
          "base-100": "#ffffff",
          "base-200": "#F9FAFB",
        },
      },
    ],
  },
};
