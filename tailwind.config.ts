import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alfaOneSlab: ["var(--font-alfaOneSlab)"],
      },
      colors: {
        custom: "#35FCFB",
      },
    },
  },
  plugins: [],
};
export default config;
