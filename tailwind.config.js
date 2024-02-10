/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {
      colors: {
        "amarillo": "#F7A90D",
        "azul": "#000050",
        "gris": "#707070",
        "gris-medio": "#7C7C7C",
        "fondo-gris": "#F5F5F5"
      },
      scale: {
        '300': '3',
        '375': '3.75',
      },
       
    },
   
  },
   plugins: [
    require('tailwindcss-animated')
  ],
};
