import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "monospace"],
        "share-tech": ["var(--font-share-tech)", "monospace"],
        rajdhani: ["var(--font-rajdhani)", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        scan: "scan 4s linear infinite",
        "glitch-ai": "glitch-ai-professional 6s infinite",
      },
      keyframes: {
        "glitch-ai-professional": {
          "0%, 100%": { transform: "translate(0)" },
          "2%": { transform: "translate(-1px, 0)" },
          "4%": { transform: "translate(1px, 0)" },
          "6%": { transform: "translate(0)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { opacity: "0.3" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
      },
      opacity: {
        "3": "0.03",
        "5": "0.05",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
