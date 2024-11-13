import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },    
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      height: ({
        "screen/2": "50vh",
        "screen/75": "calc(100vh * .7)",
        "screen/03": "calc(100vh * .03)",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {        
        primary: "#136c34",
        blue: {
          200: '#D0E4FE',
          400: '#0070F3',
          600: '#2F6FEB',
        },        
        green: {
          200: '#eafce7', //5cf174
          400: '#40d65b',
          600: '#00a859', //136c34
        },      
        red: {
          200: '#FFE2E5',
          400: '#ff5f84',
          600: '#f5363e',
        },      
        yellow: {
          200: '#fff4de',
          400: '#fe9479',
          600: '#ff9473',
        },
        purple: {
          200: '#f4e8ff',
          400: '#bf82ff',
          600: '#9b1fe9',
        },
        'white': '#fff',
        'black': "#1F233A",
        'gold': '#fece74'
      },
    },
    background: {Color: '#0e0'},
    backgroundImage: {
      "gradient-1":
        "linear-gradient(55.15deg, #8EA5FE -7.09%, #BEB3FD 51.72%, #90D1FF 101.48%)",
      "gradient-2": "linear-gradient(120.12deg, #FF8FE8 0%, #FFC960 100%)",
      "gradient-3":
        "linear-gradient(55.15deg, #031d14 -7.09%, #182140 51.72%, #031d14 101.48%)",
        "gradient-4":
          "linear-gradient(180deg, #fff 5%, #136c34 100%)",
      texture: "url('/images/graphics/vecteezy_vector-grass-border-vector-illustration_27198095.svg')",
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
};
export default config;
