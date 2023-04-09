/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#d6d7da",
        darkBackground: "#1E1E1E",
        panelLighter: "#FFFFFF",
        darkPanelLighter: "#2E2E2E",
        panel: "#F6F6F8",
        darkPanel: "#252525",
      },
    },
  },
  plugins: [],
};
