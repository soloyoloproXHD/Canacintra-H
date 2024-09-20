import type { Config } from "tailwindcss";
import daisyui from 'daisyui';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lnav: "#ECC7FE",
        l50: "#fbf3ff",
        l100: "#f6e3ff",
        l200: "#efcdff",
        l300: "#e2a5ff",
        l400: "#d16cff",
        l500: "#c035ff",
        l600: "#b10fff",
        l700: "#a600ff",
        l800: "#8406c3",
        l900: "#6c079c",
        l950: "#4b0076",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};

export default config;