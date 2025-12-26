module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          foreground: "#ffffff"
        },
        muted: {
          DEFAULT: "#f3f4f6",
          foreground: "#4b5563"
        },
        border: "#e5e7eb"
      },
      borderRadius: {
        md: "0.375rem",
        lg: "0.5rem"
      }
    }
  },
  plugins: []
};
