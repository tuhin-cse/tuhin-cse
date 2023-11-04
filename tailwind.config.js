/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        text: 'var(--color-text)',
        'text-alt': 'var(--color-text-alt)',
        background: 'var(--color-background)',
        'background-alt': 'var(--color-background-alt)',
      },
      fontFamily: {
        body: ['Nunito'],
      },
    },
  },
  plugins: [],
}

