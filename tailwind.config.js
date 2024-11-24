/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js}",
    "./dist/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5F0B35',
          light: '#F7C8E0',
          dark: '#3C0A27',
        },
        secondary: {
          DEFAULT: '#FF5722',
          dark: '#E64A19',
        },
      },
      backgroundImage: {
        circle: "radial-gradient(circle, rgba(255,87,34,0.5) 0%, rgba(95,11,53,0) 70%)",
        circle2: "radial-gradient(circle, rgba(95,11,53,0.5) 0%, rgba(255,87,34,0) 70%)",
      },
    },
  },
  plugins: [],
};

