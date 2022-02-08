module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: ['./_includes/**/*.html', './_layouts/**/*.html', './_posts/*.md', './*.html'],
}
