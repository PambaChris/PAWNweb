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
        'background': '#FFFFFF',
        'foreground': '#000000',
        'primary': '#2F2A8B', // Purple for buttons
        'muted': '#F3F4F6', // Light gray for backgrounds
        'muted-foreground': '#6B7280', // Medium gray for text
        'white': '#FFFFFF',
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
