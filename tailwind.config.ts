import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Hiragino Mincho ProN"', '"Yu Mincho"', '"YuMincho"', '"Noto Serif JP"', 'serif'],
      },
      colors: {
        pmo: { DEFAULT: "#0b1d3a", light: "#16335f", accent: "#38bdf8" },
      },
    },
  },
  plugins: [],
};

export default config;
