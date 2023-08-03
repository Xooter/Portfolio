/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'hack': ['Cascadia Code'],
    },
      colors: {
        'Rosewater': '#f4dbd6',
        'Flamingo': '#f0c6c6',
        'Pink': '#f5bde6',
        'Mauve': '#c6a0f6',
        'Red': '#ed8796',
        'Maroon': '#ee99a0',
        'Peach': '#f5a97f',
        'Yellow': '#eed49f',
        'Green': '#a6da95',
        'Teal': '#8bd5ca',
        'Sky': '#91d7e3',
        'Sapphire': '#7dc4e4',
        'Blue': '#8aadf4',
        'Lavender': '#b7bdf8',
        'Text': '#cad3f5',
        'Subtext1': '#b8c0e0',
        'Subtext0': '#a5adcb',
        'Overlay2': '#939ab7',
        'Overlay1': '#8087a2',
        'Overlay0': '#6e738d',
        'Surface2': '#5b6078',
        'Surface1': '#494d64',
        'Surface0': '#363a4f',
        'Base': '#24273a',
        'Mantle': '#1e2030',
        'Crust': '#181926',
        'Vim': '#272727',
      },
    }
  },
  plugins: [],
}