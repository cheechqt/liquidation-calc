/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      xs: "370px",
      md: "480px",
      lg: "768px",
      xl: "1280px",
    },
    container: {
      screens: {
        sm: "370px",
        md: "370px",
        lg: "480px",
        xl: "480px",
      },
    },
    extend: {
      colors: {
        dark: "#252525",
        light: "#f5f5f5",
        strange: "#a5a5a5",
      },
    },
  },
  plugins: [],
};
