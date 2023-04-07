/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#d6d7da",
        panelLighter: "#FFFFFF",
        panel: "#F6F6F8",
      },
    },
  },
  plugins: [],
};
