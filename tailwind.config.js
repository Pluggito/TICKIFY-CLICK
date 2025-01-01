/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b30d0d',
        secondary: '#1a1a1a',
      },
      backgroundColor: {
        'white/90': 'rgba(255, 255, 255, 0.9)',
        'black/50': 'rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'Poppins'], // Add your custom font
      },
    },
  },
  plugins: [],
}

