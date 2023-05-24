/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants:{
    extends:{
      display:['group-focus'],
      opacity:['group-focus'],
      inset:['group-focus']
    },
  },
  plugins: [require("daisyui")],
}
