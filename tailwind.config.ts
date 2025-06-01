import type { Config } from 'tailwindcss';
import { AppleTheme } from './lib/theme';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'apple-gradient': 'linear-gradient(135deg, #B4B4B4 0%, #FAFAFA 100%)',
        'blue-gradient': 'linear-gradient(135deg, #0077ED 0%, #00A2FD 100%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        apple: {
          blue: AppleTheme.colors.blue,
          green: AppleTheme.colors.green,
          indigo: AppleTheme.colors.indigo,
          orange: AppleTheme.colors.orange,
          pink: AppleTheme.colors.pink,
          purple: AppleTheme.colors.purple,
          red: AppleTheme.colors.red,
          teal: AppleTheme.colors.teal,
          yellow: AppleTheme.colors.yellow,
          background: AppleTheme.colors.background,
          backgroundSecondary: AppleTheme.colors.backgroundSecondary,
          text: AppleTheme.colors.text,
          textSecondary: AppleTheme.colors.textSecondary,
          border: AppleTheme.colors.border,
        }
      },
      fontFamily: {
        sans: ['"SF Pro Text"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'apple-sm': '0 2px 5px rgba(0, 0, 0, 0.05)',
        'apple': '0 4px 10px rgba(0, 0, 0, 0.1)',
        'apple-lg': '0 10px 20px rgba(0, 0, 0, 0.15)',
        'apple-xl': '0 20px 25px rgba(0, 0, 0, 0.15)',
        'apple-inner': 'inset 0 0 5px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
