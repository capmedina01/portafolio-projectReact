/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      "2xl": { max: "2000px" },
      // => @media (max-width: 1535px) { ... }
    },
    extend: {
      colors: {
        'primary': '#0D47A1',
        'secondary': '#FFC107',
        'neutral-light': '#F5F5F5',
        'neutral-dark': '#212121',
        'accent': '#E53935',
        'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      },
    },
  },
  plugins: [],
}

