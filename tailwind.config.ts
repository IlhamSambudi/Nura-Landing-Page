import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nura: {
          purple: {
            DEFAULT: '#8454e4',
            light: '#9c6cfc',
            soft: '#f3ebff',
            dark: '#6835d4',
            glow: 'rgba(132, 84, 228, 0.25)',
          },
          cream: {
            DEFAULT: '#faf7f0',
            dark: '#f1ede2',
            card: '#ffffff',
          },
          ivory: {
            DEFAULT: '#f5f1e6',
            subtle: '#ebe5d8',
          },
          forest: {
            DEFAULT: '#0b2d2c',
            dark: '#061a19',
            light: '#13403e',
            surface: '#0f3634',
            border: '#1b4a47',
          },
          teal: {
            DEFAULT: '#1f736b',
            light: '#35968d',
            soft: '#e7f5f3',
            border: '#2c8279',
          },
          gold: {
            DEFAULT: '#daab5b',
            dark: '#bd8f3e',
            soft: '#fdf8ec',
          },
          plum: {
            DEFAULT: '#15111f',
            dark: '#0a0812',
            card: '#1e192c',
            border: '#2b243e',
          },
          charcoal: '#121017',
          text: {
            DEFAULT: '#171f1d',
            muted: '#5c6865',
            subtle: '#889592',
            inverse: '#faf7f0',
          },
          border: {
            DEFAULT: '#e6dfcf',
            dark: '#1e3836',
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans Variable"', '"Inter Variable"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans Variable"', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        arabic: ['"Traditional Arabic"', 'Amiri', 'serif'],
      },
      boxShadow: {
        'nura-soft': '0 4px 20px -2px rgba(17, 34, 30, 0.05), 0 2px 6px -1px rgba(17, 34, 30, 0.03)',
        'nura-card': '0 12px 36px -4px rgba(17, 34, 30, 0.08), 0 4px 12px -2px rgba(17, 34, 30, 0.04)',
        'nura-float': '0 24px 60px -8px rgba(17, 34, 30, 0.14), 0 8px 24px -4px rgba(17, 34, 30, 0.06)',
        'nura-dark': '0 20px 50px -10px rgba(0, 0, 0, 0.5), 0 4px 16px -2px rgba(0, 0, 0, 0.3)',
        'nura-purple': '0 10px 30px -4px rgba(132, 84, 228, 0.35)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
} satisfies Config
