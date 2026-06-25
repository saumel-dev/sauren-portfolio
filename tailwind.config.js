/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A0F1E',
          light: '#111827',
          mid: '#0D1526',
        },
        teal: {
          electric: '#00C9A7',
          deep: '#0077B6',
          glow: 'rgba(0,201,167,0.3)',
        },
        gold: '#FFD700',
        slate: {
          light: '#C8D5E1',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'heartbeat-line': 'heartbeatLine 3s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        'typing': 'typing 3.5s steps(30) infinite',
        'blink': 'blink 0.7s step-end infinite',
        'count-up': 'countUp 2s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease forwards',
        'draw-path': 'drawPath 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0,201,167,0.4), 0 0 20px rgba(0,201,167,0.2)' },
          '50%': { boxShadow: '0 0 25px rgba(0,201,167,0.8), 0 0 50px rgba(0,201,167,0.4)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '70%': { transform: 'scale(1)' },
        },
        heartbeatLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        drawPath: {
          '0%': { strokeDashoffset: '500' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'teal-glow': '0 0 20px rgba(0,201,167,0.4)',
        'teal-glow-lg': '0 0 40px rgba(0,201,167,0.6)',
        'blue-glow': '0 0 20px rgba(0,119,182,0.4)',
      },
    },
  },
  plugins: [],
}
