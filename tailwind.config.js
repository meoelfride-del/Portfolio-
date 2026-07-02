/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#072344",
        secondary: "#f59e0b",
        accent: "#22c55e",
        "grey-lightest": "#f3f6fb",
      },
      fontFamily: {
        body: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};