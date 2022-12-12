/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'san-serif']
      },
      colors: {
        'bud-green': '#83BF6E',
        'lavender-blue': '#CABDFF',
        'uranian-blue': '#B1E5FC',
        'peach': '#FFBC99',
        'azure-blue': '#2A85FF',
        'sonic-silver': '#6F767E',
        'gunmetal': '#272B30',
        'black': '#111315',
        'soft-black': '#1A1D1F',
        'light-grey': '#F4F4F4',
        'light-white': '#FCFCFC'
      },
      fontSize: {
        "heading": "2.5rem",
        "mobile-heading": "2rem",
      },
    },
  },
  plugins: [],
}
