/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-col": "#FAFFFC",
        "hl-col": "#174674",
      },
    },
  },
  plugins: [],
};
