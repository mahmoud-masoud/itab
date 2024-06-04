/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        'primary-300': '#A5B4FC',
        'primary-200': '#C7D2FE',
        'primary-100': '#E0E7FF',
        'primary-50': '#EEF2FF',
        hover: '#6366F1',
        secondary: '#E5F33E',
        dark: '#1E1B4B',
        'text-color': '#1E169D',
        gray: '#C6C6CA',
        'gray-600': '#373646',
        'gray-300': '#7E7E81',
        'gray-100': '#DADADA',
        'gray-50': '#F9F9F9',
      },
      boxShadow: {
        card: '10px 10px 40px 4px #DADADA',
      },

      gridTemplateColumns: {
        open: '300px 1fr',
        closed: '100px 1fr',
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require('daisyui')],
};
