/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      img: "url('./assets/header.jpg')",
    },

    screens: {
      sm: "",

      md: "888px",

      lg: "1200px",
    },
    extend: {
      colors: {
        btn: "rgb(229, 231, 235)",
        btnDisabled: "#d51a1a",
      },
    },
  },
  plugins: [],
};
