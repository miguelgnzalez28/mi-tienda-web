/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Heading Now', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'subtitle': ['Kleptocracy Expanded', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'body': ['Mont', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'sans': ['Mont', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        // Nueva paleta de colores
        'light-gray': '#E7E9E4',
        'deep-black': '#0A0809',
        'vibrant-yellow': '#FFC71F',
        'intense-orange': '#FF6700',
        'medium-green': '#3D7F5D',
        'wine-red': '#7A1023',
        'bright-blue': '#2E8ACC',
        
        // Colores adicionales para gradientes y variaciones
        'light-gray-50': '#F8F9F7',
        'light-gray-100': '#E7E9E4',
        'light-gray-200': '#D1D5D0',
        'deep-black-900': '#0A0809',
        'deep-black-800': '#1A1819',
        'vibrant-yellow-400': '#FFC71F',
        'vibrant-yellow-300': '#FFD54F',
        'intense-orange-500': '#FF6700',
        'intense-orange-400': '#FF8533',
        'medium-green-600': '#3D7F5D',
        'medium-green-500': '#4A9B6B',
        'wine-red-700': '#7A1023',
        'wine-red-600': '#8B1A2A',
        'bright-blue-500': '#2E8ACC',
        'bright-blue-400': '#4A9FD1',
      }
    },
  },
  plugins: [],
}
