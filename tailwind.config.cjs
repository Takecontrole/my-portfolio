/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#D58E88",
        tertiary: "#151030",
        tertiar: "#1d1836",
        light: "#fff",
        lightsec: "#5B2935",
        light3: "#A58AC5",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "web": "url('/src/assets/pxfuel.jpg')",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(10px)' },
          '50%': { transform: 'rotate(0deg)' },
        }
      },
        animation: {
        wiggle: 'wiggle 3s ease infinite alternate',
      },
    },
  },
  plugins: [],
};
