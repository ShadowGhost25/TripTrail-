/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        'custom-xl': '1216px',
      },
    },
    // plugins: [
    //   function ({ addVariant }) {
    //     addVariant('autofill', '&:-webkit-autofill')
    //   },
    // ],
  },
  darkMode: 'class',
  plugins: [],
}
