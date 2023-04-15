/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['"Kumbh Sans"', 'sans-serif'],
    },
    extend: {
      colors: {
        'dark-cyan': 'hsl(185, 75%, 39%)',
        'very-dark-desaturated-blue': 'hsl(229, 23%, 23%)',
        'dark-grayish-blue': 'hsl(227, 10%, 46%)',
        'dark-gray': 'hsl(0, 0%, 59%)',
      },
      backgroundImage: {
        'pattern-card': "url('images/bg-pattern-card.svg')",
      },
      ringWidth: {
        '6': '6px',
      },
    }
  },
  plugins: [],
}

