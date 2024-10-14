/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'light': '#FFFFFF',
        'dark': '#000000',
      },
      textColor: {
        'light': '#000000',
        'dark': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
