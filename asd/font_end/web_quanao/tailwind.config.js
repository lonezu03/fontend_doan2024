/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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

