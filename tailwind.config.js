/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-200': '#F2F2F2',
        'primary-300': '#E6E6E6',
        'primary-400': '#D9D9D9',
        'secondary-100': '#FAFAF9',
        'secondary-200': '#E8E8E3',
        'secondary-300': '#DDDDD5',
        'secondary-400': '#D1D1C7',
        'secondary-500': '#AEAE9D',
        'secondary-600': '#8C8C73',
        'accent-400': '#0E0E0C',
        'accent-300': '#262626',
        'accent-200': '#4D4D4D',
        'accent-100': '#666666',
      },
      fontSize: {
        'title': ['clamp(2.75rem, 15vw, 9.5rem)'],
        'heading-1': ['clamp(2rem, 10vw, 6rem)'],
        'heading-2': ['clamp(3rem, 10vw, 4.75rem)'],
        'body-1': '2rem',
        'body-2': '1.5rem',
        'body-3': '1.10rem',
        'body-4': '1rem',
      },
      letterSpacing: {
        'headings': '-0.05em'
      },
      fontFamily: {
        'general': ['GeneralSans-Variable', 'sans-serif'],
        'grotesk': ['CabinetGrotesk-Variable', 'sans-serif'],
      }
    },
  },
  plugins: [],
}