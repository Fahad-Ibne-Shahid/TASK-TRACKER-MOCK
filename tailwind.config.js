/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        coal: "#0A0A0A",
        ash: "#1A1A1A",
        flame: "#FF6B35"
      },
      fontFamily: {
        sans: ["Inter", "Satoshi", "Space Grotesk", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 107, 53, 0.28)",
        card: "0 24px 80px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "radial-flame": "radial-gradient(circle at 50% 0%, rgba(255,107,53,.35), transparent 34%)"
      }
    }
  },
  plugins: []
};
