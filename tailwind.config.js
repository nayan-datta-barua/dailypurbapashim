// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./index.html",
//     // "./index.html",  
//     // "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         'sans': ['ui-sans-serif', 'system-ui'],
//         'serif': ['ui-serif', 'Georgia'],
//         'mono': ['ui-monospace', 'SFMono-Regular'],
//         'display': ['Oswald'],
//         'body': ['"Open Sans"'],
//       },
//       gridTemplateColumns:{
//         '70/30':'70%:30%',
//       }
//     },
//   },
//   plugins: [],

// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/helper/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
      },
      gridTemplateColumns:{
        '70/30':'70%:30%',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *'); // Targets direct children
      addVariant('child-hover', '& > *:hover'); // Targets direct children on hover
    },
  ],
};