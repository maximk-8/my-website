/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      margin: {
        '1/9': '11.1111111%',
        '1/7': '14.2857143%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      padding: {
        '1-12': '8.3333333%',
        '1/9': '11.1111111%',
        '1/7': '14.2857143%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      borderRadius: {
        'large': '1.5rem',
      },
    },
  },
  plugins: [],
}

