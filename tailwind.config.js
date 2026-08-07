/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#F7F7F7',
          100: '#EDEDED',
          200: '#D4D4D4',
          300: '#A8A8A8',
          400: '#767676',
          500: '#4D4D4D',
          600: '#333333',
          700: '#222222',
          800: '#161616',
          900: '#0D0D0D',
          950: '#080808',
        },
        paper: {
          50: '#FBFAF8',
          100: '#F6F3EE',
          200: '#EDE7DC',
          300: '#E0D7C6',
        },
        gold: {
          50: '#FBF7EF',
          100: '#F4EBD6',
          200: '#E8D6AD',
          300: '#DBBE82',
          400: '#CDA85E',
          500: '#B8924A',
          600: '#9C773C',
          700: '#7C5D31',
          800: '#5E4625',
          900: '#40301A',
        },
        success: {
          500: '#3F8F5C',
          600: '#2F7147',
        },
        error: {
          500: '#C0392B',
          600: '#A52F22',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
