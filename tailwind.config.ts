import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      "phone": "500px",
      "sphone" : "450px"
    },
    fontFamily: {
      montserrat :["Montserrat,sans-serif"]
    },
    extend: {
      colors: {
        blues: {
          100: "#11468F"
        },
        crimson: {
          100: "#800000", 
          200: "#620000",
          300: "#450000",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gedung-penus': "url('/gedung-penus.jpg')"
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
export default config
