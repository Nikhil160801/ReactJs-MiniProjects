/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'todo-pattern': "url('/images/todo.png')",
        'weather-texture': "url('/images/bgweather.jpg')",
        'currency-converter': "url('/images/currencyconverter.png')",
      }
    },
  },
  plugins: [],
}

