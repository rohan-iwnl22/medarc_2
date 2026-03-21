/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        sans: ["'DM Sans'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      colors: {
        primary: {
          50:  "#edfafa",
          100: "#d5f5f6",
          200: "#aaeaec",
          300: "#6fd8db",
          400: "#2dc0c8",
          500: "#2198a0",
          600: "#1f9a9f",
          700: "#166f75",
          800: "#145a5f",
          900: "#114a4e",
        },
        accent: {
          300: "#e8c882",
          400: "#dab562",
          500: "#cd9e4e",
          600: "#b8862e",
          700: "#9a6d1f",
        },
        navy: {
          800: "#0e1c2f",
          900: "#091524",
        },
      },
      animation: {
        "fade-up":    "fadeUp 0.7s ease forwards",
        "fade-in":    "fadeIn 0.5s ease forwards",
        "float":      "float 7s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-14px)" },
        },
      },
      boxShadow: {
        "card":    "0 4px 24px rgba(33,152,160,0.08)",
        "card-lg": "0 8px 40px rgba(33,152,160,0.14)",
        "glow":    "0 0 32px rgba(33,152,160,0.25)",
      },
    },
  },
  plugins: [],
};
