/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        inputWidth: '514px',
        idetifyLogo: '650px'
      },
      height: {
        lineHeight: '1px',
      },
      margin: {
        negative: '0',
      },
    },
  },
  plugins: [],
}
