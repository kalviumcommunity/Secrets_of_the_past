/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: 'class',
    theme: {
      extens: {},
    },
  
  theme: {
    extend: {},
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
