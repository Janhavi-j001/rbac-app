/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3d52a0',
        secondary: '#7091e6', 
        accent: '#8697c4',
        background: '#ede8f5',
        'text-primary': '#3d52a0',
        'text-light': '#ede8f5',
        'text-muted': '#8697c4',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(61, 82, 160, 0.1)',
        'medium': '0 8px 30px rgba(61, 82, 160, 0.15)',
        'strong': '0 12px 40px rgba(61, 82, 160, 0.2)',
      },
    },
  },
  plugins: [],
};
