/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
    "./src/section/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        outfit: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        "homeHero": "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)),url('/img/imageTwo.jpg')",
        "bookingHero":"linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)),url('/img/imageOne.jpg')",
        "aboutHero": "linear-gradient(rgba(0,0,128,0.2), rgba(0,0,128,0.6)),url('/img/imageTen.jpg')",
        "processOne": "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)),url('/img/imageNine.jpg')",
        "processTwo": "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url('/img/imageTen.jpg')",
        "clientReview": "linear-gradient(to right, rgba(0,0,0,0.5), rgba(5, 87, 174, 0.8)),url('/img/imageFourteen.jpg')",
        "residential": "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0, 0.8)),url('/img/imageFourteen.jpg')",
        "commercial": "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0, 0.8)),url('/img/imageEleven.jpg')",
        "landscape": "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0, 0.8)),url('/img/imageSix.jpg')"
      },
      colors: {
        primary: "#294DB6",
        secondary: "#2BB74D",
        dark_secondary: "#0C1225",
        dark_primary: "#3E4055",
        text_primary: "#0C1225",
        text_secondary:"#666E83",
        background: "#E6EAF8",
        input: "#F6F7FD",
        contact: "#A2ADDA",
        process: "#0C1225",
        process_logo: "#8E9CD2"
    },
    }
  },
  plugins: [],
}
