/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      fuckingHuge: "4vw",
      big: "2vw",
      medium: "1.5vw",
      plain: "1vw",
      small: "0.75vw",
    },
    extend: {
      borderRadius: {
        ease: "1.5vw",
      },
      colors: {
        lowOpacityStone200: "rgb(231 229 228 / 0.5)",
      },
    },
  },
  plugins: [],
};
