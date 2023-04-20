/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.{html,js}"],
  theme: {
    backgroundColor: ["hover"],
    colors: ["hover"],
    borderRadius: ["hover"],
    opacity: ["hover"],
    borderColor: ["hover"],
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      schib: ["Schibsted Grotesk", "sans-serif"],
      klim: ["klim", "sans-serif"],
    },
    extend: {
      fontSize: {
        half: "3rem",
        big: "7rem",
      },
      spacing: {
        30: "120px",
        roy: "1.6rem",
      },
      lineHeight: {
        thin: "0.69",
      },
      borderRadius: {
        bullet: "0 50% 0 0",
        ghost: "30% 0 25% 0",
        logo: "19% 5%;",
        logo2: "0 19%;",
      },
      backgroundColor: {
        darkgreen: "#010b01",
        lightgreen: "#51c652",
        seagreen: "#7bfb7c",
        darkest: "#141f1091",
      },
      colors: {
        darkgreen: "#010b01",
        lightgreen: "#51c652",
        seagreen: "#7bfb7c",
        darkest: "#141f1091",
      },
      borderColor: {
        oddgreen: "#242524",
      },
    },
    plugins: [],
  },
};
