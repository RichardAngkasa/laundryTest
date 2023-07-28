/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#E7F5FD",
          400: "#CAECFF",
          800: "#2D9CDB",
          1000: "#0099EE",
        },
        highlight: {
          green: "#56E4A0",
          red: "#F36868",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
