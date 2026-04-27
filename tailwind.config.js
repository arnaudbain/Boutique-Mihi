/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mihiGreen: "#1b4332",
        mihiOrange: "#FF8C69",
      },
    },
  },
  plugins: [],
}
