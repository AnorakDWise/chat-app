/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      bigAsUrMom: "8vw",
      fuckingHuge: "4vw",
      phoneBig: "2.5vw",
      big: "2vw",
      medium: "1.5vw",
      plain: "1vw",
      phonePlain: "5vw",
      small: "0.75vw",
    },
    screens: {
      md: { max: "767px" },
    },
    extend: {
      borderRadius: {
        ease: "1.5vw",
        strong: "4vw",
      },
      colors: {
        lowOpacityStone200: "rgb(231 229 228 / 0.5)",
      },
    },
  },
  plugins: [],
};
