/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // For App Router
    './components/**/*.{js,ts,jsx,tsx}', // Adjust paths as needed
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
