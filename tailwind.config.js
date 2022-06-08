module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body': '#17171F',
        'selected-text': '#A3A3FF',
        'theme': '#3F3FFF',
        'nav': '#404053',
        'secondary': '#9191a4',
        'tertiary': '#d35fc8',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35',
        'html': '#f08922',
        'css': '#2d89dd',
        'javascript': '#f0db4f',
        'react': '#61dafb',
        'vue': '#41b883',
        'angular': '#dd0031',
        'tailwind': '#3F3FFF',
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif'],
      }
    },
  },
  plugins: [],
}