/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0A0F0E",
        surface: "#111917",
        ink: "#E9F0ED",
        accent: {
          DEFAULT: "#2DD4BF",
          deep: "#0F5C52",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
