/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      screens: {
        'md2': '872px'
      },
      fontSize: {
        'title': ['clamp(3rem, 14vw, 9rem)'],
        'heading-1': ['clamp(2.5rem, 6.5vw, 10rem)'],
        'heading-2': ['clamp(2.4rem, 8vw, 10rem)'],
        'heading-3': ['clamp(2rem, 5vw, 2.75rem)'], 
        'special': ['clamp(2rem, 4vw, 3.25rem)'],
        'works-title': ['clamp(1.25rem, 2vw, 1.5rem)'],
        'body-1': ['clamp(1.1rem, 2vw, 1.3rem)'], 
        'body-2': ['clamp(1rem, 1.5vw, 1.5rem)'],
        'body-3': '1.1rem',
        'body-4': ['clamp(0.75rem, 3vw, 1rem)'],
      },
      letterSpacing: {
        'headings': '-0.03em'
      },
      fontFamily: {
        'general': ['GeneralSans-Variable', 'sans-serif'],
        'grotesk': ['CabinetGrotesk-Variable', 'sans-serif'],
      },
      colors: {
        'transparent': 'transparent',
        'primary-200': '#F2F2F2',
        'primary-300': '#E6E6E6',
        'primary-400': '#D9D9D9',
        'secondary-100': '#FAFAF9',
        'secondary-200': '#E8E8E3',
        'secondary-300': '#DDDDD5',
        'secondary-400': '#D1D1C7',
        'secondary-500': '#AEAE9D',
        'secondary-600': '#8C8C73',
        'secondary-700': '#70705C',
        'accent-400': '#0E0E0C',
        'accent-300': '#262626',
        'accent-200': '#4D4D4D',
        'accent-100': '#666666',
      },
    }
  },
  plugins: [],
}