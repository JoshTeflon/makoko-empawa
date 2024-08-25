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
        main: "#F8F5E9",
        primary: "#0B6051",
        secondary: "#FFC400",
        galleryLines: "#212152",
      },
      boxShadow: {
        activeCard: '7px 16px 40px 3px rgba(0, 0, 0, 0.2)',
        testimonialCard: '1px 0px 4px 1px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
};
export default config;
