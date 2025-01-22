module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Your React components' file extensions
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(60deg, rgba(0, 0, 0, 1) 50%, rgb(97, 35, 48) 100%)',
        'custom-gradient-hover': 'linear-gradient(-60deg, rgba(0, 0, 0, 1) 50%, rgb(97, 35, 48) 100%)',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',  // This is a default, but you can configure if needed.
      },
      colors: {
        'custom-dark-pink': '#360f35',
      },
    },
  },
  plugins: [],
};

