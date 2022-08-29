/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        cal: ["Cal Sans", "Inter var", "sans-serif"],
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        rocket: {
          "0%": {
            transform: "scale(1.05)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
    animation: {
      "fade-in-up": "fade-in-up 0.5s ease-out",
      rocket: "rocket 0.2s ease-out infinite",
    },
  },
  plugins: [],
};
