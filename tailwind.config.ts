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
        'background': '#E0B0FF', // New Lilac
        'foreground': '#000000', // Black for text
        'primary': '#E0B0FF',   // New Lilac for accents
        'muted': '#E0B0FF',     // New Lilac muted
        'muted-foreground': '#000000', // Black
        'white': '#E0B0FF',     // New Lilac white
        'burnt-orange': '#CC5500', // Burnt orange color for hover effects

      },
      fontFamily: {
        heading: ['var(--font-body)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
