/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007AFF",
        secondary: "#1A1A1A",
        accent: "#00F2FF",
      },
      fontFamily: {
        sans: ['Montserrat', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
