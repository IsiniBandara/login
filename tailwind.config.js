module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            'regal-blue': '#243c5a',
            'transparent': 'transparent',

            'black': '#2B4964',
            'grey-darkest': '#626471',
            'grey-darker': '#878c98',
            'grey-dark': '#adb4c2',
            'grey': '#d5d9e3',
            'grey-light': '#dee1e8',
            'grey-lighter': '#eaebef',
            'grey-lightest': '#fcfcfc',
            'white': '#ffffff',
            'blue-dark' : '#193657',
            'blue-light':'#52739F',
          
            'primary': '#252729',
            'primary-dark': '#252729'
          },
          fontWeight: {
            hairline: 100,
            'extra-light': 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            'extra-bold': 800,
            black: 900,
          }
      },
    },
    plugins: [],
  }