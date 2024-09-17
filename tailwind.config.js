/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js"
   
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-ui': ['SF UI Text', 'sans-serif'],
      },
      screens: {
        'tablet': '1050px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin') 
  ],
}