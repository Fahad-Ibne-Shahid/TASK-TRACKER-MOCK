/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coal: "#0A0A0A",
        flame: "#FF6B35",
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 107, 53, 0.35)",
        card: "0 8px 32px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
