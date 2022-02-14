module.exports = {
  content: ['./_includes/**/*.html', './_layouts/**/*.html', './_posts/*.md', './*.html'],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins'],
      },
      colors: {
        'primary-blue': {
          100: '#D2E3FC',
          500: '#1a73e8',
        },
        'primary-green': {
          100: '#CEEAD6',
          500: '#34a853',
        },
      },
    },
  },
  plugins: [],
}
