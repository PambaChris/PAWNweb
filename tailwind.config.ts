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
        'background': '#F8F0FC', // Very light purple/grey
        'foreground': '#1F1F1F', // Almost black for text
        'primary': '#C8A2C8',   // Lilac (user requested)
        'muted': '#E0D0E8',     // Lighter muted lilac
        'muted-foreground': '#4A4A4A', // Dark grey for secondary text
        'white': '#FFFFFF',     // Pure white
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
