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
        "light-shade": "#dde6ed",
        "light-accent": "#779392",
        "main-colour": "#749da9",
        "dark-accent": "#526d82",
        "dark-shade": "#27374d",
      },
    },
  },
  plugins: [],
};
export default config;
