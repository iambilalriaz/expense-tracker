/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e90ff',
        secondary: '#28282B',
        light: '#fbfbfb',
        outline: '#D3D3D3',
        error: '#ff726f',
      },
    },
  },
  plugins: [],
};
