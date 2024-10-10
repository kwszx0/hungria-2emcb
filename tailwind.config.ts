import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        'sans-2': ['var(--font-league-spartan)'],
      },
    },
  },
  plugins: [],
}
export default config
