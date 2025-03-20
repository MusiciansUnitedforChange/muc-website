/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['lexend'],
        inter: ['inter'],
      },
      colors: {
        primary: '#ff7e5f',
        secondary: '#feb47b',
        // Add more colors as needed




      },
    }, 
  },
  plugins: [],
};

