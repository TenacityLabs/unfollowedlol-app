import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'wrap' : {'max' : '1048px'},
      'sm' : '640px',
      'hero-text' : '675px',
    }
    ,
    extend: {
      backgroundImage: {
        'faq-bg': "url('/public/FAQ-bg.png')"
      }
    },
  },
  plugins: [],
};
export default config;
