/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff8ff",
          100: "#dbedfe",
          200: "#bfe0fe",
          300: "#93cdfd",
          400: "#60b0fa",
          500: "#3b91f6",
          600: "#2575eb",
          700: "#1d5fd8",
          800: "#1e4eaf",
          900: "#1e438a",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
