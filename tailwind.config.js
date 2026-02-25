/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },
      colors: {
        bg: '#080c10',
        bg2: '#0e1318',
        card: '#111820',
        accent: '#00e5c0',
        accent2: '#ff6b35',
        accent3: '#7c6bff',
      },
    },
  },
  plugins: [],
}
