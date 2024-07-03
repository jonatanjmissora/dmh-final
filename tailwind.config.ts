import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FAE208',
        'my-black': '#181818',
        'my-grey-dark': '#201F22',
        'my-grey-medium': '#3A393E',
        'my-grey-light': '#E3DFCF',
        'my-red': '#DA0000',
        'my-white': '#EEEAEA',
      },
      height: {
        nav: '64px',
        footer: '70px',
      },
    },
  },
  plugins: [],
};
export default config;
