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
        'surface-1': "#FBF9F5",
        'surface-2': "#FFFFFF",
        'type-1': "#403128",
        'type-2': "#403128",
        'stroke-1': "#796A59",
        'test': "#ffb300",
      },

      width: {
        'base': '423.875px',
      },
      spacing: {
        '1': '15px',
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
        'el': '40px'
      },


      aspectRatio: {
        'main': '4 / 5',
      },
    },
  },
  plugins: [],
}

