/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#0B1426',
        'lunar-silver': '#C4C4C4',
        'apollo-blue': '#1E3A8A',
        'evidence-green': '#10B981',
        'conspiracy-red': '#EF4444',
      },
    },
  },
  plugins: [],
}