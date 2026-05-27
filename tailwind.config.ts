import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        muted: "#666666",
        line: "#e9e5df",
        paper: "#fffdfa",
        ember: "#ef4f2f"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(17, 17, 17, 0.06)"
      }
    }
  },
  plugins: []
};

export default config;
