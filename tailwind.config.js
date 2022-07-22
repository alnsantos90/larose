/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        primary: '#efebeb',
        secondary: '#133D61'
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(20deg)' },
          '50%': { transform: 'rotate(0deg)' }
        }
      }
    }
  },
  plugins: []
}

