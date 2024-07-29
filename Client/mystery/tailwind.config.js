/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkest-blue': '#00001c', // Custom darkest blue color
      },
    },
  },
  plugins: [require("daisyui")],
  purge: {
    enabled: true,
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  },
  daisyui: {
    styled: true,
    themes: false,
    base: false,
    // utils: false,
  },
};