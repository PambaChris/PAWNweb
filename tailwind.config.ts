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
        'background': '#5A385A', // Dark Lilac
        'foreground': '#E0E0E0', // Light Grey for text
        'primary': '#DDA0DD',   // Brighter Lilac for accents
        'muted': '#755575',     // Slightly lighter than background
        'muted-foreground': '#A0A0A0', // Medium Grey for secondary text
        'white': '#F0D0F0',     // Very Light Lilac
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
