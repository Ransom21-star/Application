import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#03020a',
        bg2: '#07060f',
        bg3: '#0c0b18',
        panel: 'rgba(8,7,20,0.97)',
        panel2: 'rgba(14,13,28,0.95)',
        border: 'rgba(80,60,200,0.18)',
        accent: '#6644ff',
        accent2: '#33aaff',
        gold: '#ffd700',
        text: '#b0aed0',
        textDim: '#504e80',
        textBright: '#ffffff',
        freqRed: '#ff1133',
        freqOrange: '#ff6600',
        freqYellow: '#ffcc00',
        freqGreen: '#00ff88',
        freqBlue: '#0099ff',
        freqPurple: '#bb00ff',
      },
      boxShadow: {
        neon: '0 0 20px rgba(100,68,255,0.35)',
      },
      backgroundImage: {
        'grid-lines': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      keyframes: {
        orbPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.3)', opacity: '0.7' },
        },
      },
      animation: {
        orbPulse: 'orbPulse 3s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}

export default config
