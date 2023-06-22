/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F9C70C',
        secondary: '#28282B',
        light: '#fbfbfb',
        outline: '#D3D3D3',
      },
    },
  },
  plugins: [],
};
