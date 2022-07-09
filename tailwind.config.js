module.exports = {
  content: [
    "./index.html",
    "./app.vue",
    "./layouts/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        primaryDark: '#2563EB',
        primaryLight: '#43B0FF',
        secondary: '#FF852D',
        carbon: '#FFEDE0'
      },
    },
  },
  plugins: [],
}
