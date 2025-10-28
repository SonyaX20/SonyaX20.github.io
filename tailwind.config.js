/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
        accent: {
          pink: '#ff0099',
          magenta: '#ff00ff',
          orange: '#ff9500',
          blue: '#4080ff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


