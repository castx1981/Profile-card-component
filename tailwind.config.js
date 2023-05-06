/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Kumbh Sans"', 'sans-serif'],
      },
      colors: {
        'darkCyan': 'hsl(185, 75%, 39%)',
        'veryDarkDesaturatedBlue': 'hsl(229, 23%, 23%)',
        'darkGrayishBlue': 'hsl(227, 10%, 46%)',
        'darkGray': 'hsl(0, 0%, 59%)',
        'paleBlue': 'hsl(228, 9%, 92%)',
      },
      backgroundImage: {
        'card-pattern': "url('images/bg-pattern-card.svg')",
      },
      spacing: {
        '18': '4.5rem',
      }
    }
  },
  plugins: [],
}

