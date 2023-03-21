/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'caftarea':"url('https://ik.imagekit.io/cmef8hxb6/3_WA1kRjsQi.jpg?updatedAt=1679424300495')",
        'logo': "url('https://uowplaybook.s3-ap-southeast-2.amazonaws.com/logo/logo-secondary.png')",
        'circles':"url('https://4kwallpapers.com/images/wallpapers/google-circles-multicolor-colorful-white-background-5k-8k-2732x2732-5352.jpg')",
      }
    }
  },
  plugins: [],
}
