import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['ui-serif', 'Georgia',  'Cambria', "Times New Roman", 'Times', 'serif'],
      },
      colors: {
        'hoof-orange': '#FF6B00',
        'hound-blue': '#002540'
      },
    },
  },
  plugins: [
    plugin(function({}) {
      require('@tailwindcss/aspect-ratio')
    }),
  ],
}
export default config
