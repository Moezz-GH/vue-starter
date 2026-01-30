const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    './node_modules/preline/preline.js',
  ],
  theme: {
    fontFamily: {
    
      
      },
      
    colors:{
     ...colors,
     atmosaid: {
       50: '#fff1f2',
       100: '#ffe4e6',
       200: '#fecdd3',
       300: '#fda4af',
       400: '#fb7185',
       500: '#f43f5e',
       600: '#e11d48',
       700: '#be123c',
       800: '#9f1239',
       900: '#881337',
     }

    
    },
    extend: {
      backgroundImage: {
       
      
      },
      colors: {
        primary: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        }
      }
    }
  },
  plugins: [ require('flowbite/plugin'),  require('preline/plugin') ],

};