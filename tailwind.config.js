/** @type {import('tailwindcss').Config} */

module.exports = {
  content: {
    relative: true,
    files: [
      "./assets/**/*.{js,ts,jsx,tsx,mdx,liquid}",
      "./theme/**/*.{js,ts,jsx,tsx,mdx,liquid}",
      "./sections/**/*.{js,ts,jsx,tsx,mdx,liquid}",
      "./snippets/**/*.{js,ts,jsx,tsx,mdx,liquid}",
      "./templates/**/*.{js,ts,jsx,tsx,mdx,liquid}",



    ],
  },
  theme: {
    extend: {
      colors: {
        'surface-1': "#fffdf8",
        'surface-2': "#ffffff",
        'surface-3': "#4b4b4b05",
        'type-1': "#403128",
        'type-2': "#403128",
        'preorder': "#c81c69ff",
        'lowstock': "#a01d40ad",
        'stroke-1': "#796a59c6",
        'stroke-2': "#403128",
        'test': "#ffb300",
      },

      width: {
        'base': '423.875px',
      },
      spacing: {
        '1': '13px',
        '2': '25px',
        '3': '30px',
        '4': '40px',
        '5': '50px',
        '6': '60px',
      },

      fontFamily: {
        'sans': ['altB'],
        'serif': ['Times',],
        'mono': ['ui-monospace'],

      },


      borderRadius: {
        'base': '3px'
      },

      height: {
        'el': '40px',
        'header-1': '50px'
      },


      aspectRatio: {
        'main': '4 / 5',
      },
    },
  },
  plugins: [],
}

