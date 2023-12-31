/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./{berichte,src,docs}/**/*.{mdx,js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
