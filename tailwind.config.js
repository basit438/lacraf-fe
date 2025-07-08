/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'title-hero': ['80px', '120px'],
        'title-large': ['61px', '120px'],
        'title': ['47px', '120px'],
        'heading': ['36px', '120px'],
        'subheading': ['27px', '120px'],
        'body-large': ['21px', '120px'],
        'body-base': ['16px', '140px'],
        'label': ['12px', '120px'],
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        quirk: ['"Quirk Modula"', 'sans-serif'],
        mozaic: ['"Mozaic GEO"', 'sans-serif'],
      
      },
    },
  },
  plugins: [],
}