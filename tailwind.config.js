module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      xs: "320px",
      lsm: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        chivo: ["Chivo Mono", "monospace"],
        prosto: ["Prosto One", "cursive"],
        rubik: ["Rubik Bubbles", "cursive"],
      },
      backgroundImage: {
        // 'name':"url('/')"
      },
    },
  },

  plugins: [],
};