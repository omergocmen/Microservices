/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: { margin:"auto",center: true, padding: '20px', screens: { sm: '600px', md: '728px', lg: '984px', xl: '1268px', '2xl': '1600px', } },
    extend: {},
  },
  plugins: [],
}
