/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",  // Custom primary color
        secondary: "#388E3C",  // Custom secondary color
      },
      container: {
        center: true,  // Centers the container
        padding: {
          DEFAULT: "1rem",  // Default padding
          sm: "3rem",  // Padding for small screens
        },
      },
      keyframes: {
        glow: {
          '0%, 100%': { transform: 'translateX(-50%) scale(1)', opacity: '0.5' },
          '50%': { transform: 'translateX(-50%) scale(1.2)', opacity: '0.7' },
        },
      },
      animation: {
        glow: 'glow 3s infinite',
      },
    },
  },
  plugins: [],
}

