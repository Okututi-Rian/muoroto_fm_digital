/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* white with opacity */
        input: "var(--color-input)", /* white */
        ring: "var(--color-ring)", /* green-800 */
        background: "var(--color-background)", /* gray-50 */
        foreground: "var(--color-foreground)", /* gray-900 */
        primary: {
          DEFAULT: "var(--color-primary)", /* green-800 */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* amber-500 */
          foreground: "var(--color-secondary-foreground)", /* gray-900 */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-500 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* light-green-50 */
          foreground: "var(--color-muted-foreground)", /* gray-600 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* teal-600 */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* gray-900 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* white */
          foreground: "var(--color-card-foreground)", /* gray-900 */
        },
        success: {
          DEFAULT: "var(--color-success)", /* green-500 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* orange-500 */
          foreground: "var(--color-warning-foreground)", /* white */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-500 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        // Cultural Brand Colors
        'earth-brown': "var(--color-earth-brown)", /* brown-400 */
        'deep-forest': "var(--color-deep-forest)", /* green-900 */
        'vibrant-orange': "var(--color-vibrant-orange)", /* orange-700 */
        'soft-sage': "var(--color-soft-sage)", /* light-green-50 */
        'charcoal': "var(--color-charcoal)", /* gray-700 */
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'headline': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'cta': ['DM Sans', 'sans-serif'],
        'accent': ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'headline-xl': ['3rem', { lineHeight: '1.2', fontWeight: '700' }], /* 48px */
        'headline-lg': ['2.25rem', { lineHeight: '1.3', fontWeight: '700' }], /* 36px */
        'headline-md': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }], /* 30px */
        'headline-sm': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }], /* 24px */
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], /* 18px */
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }], /* 16px */
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], /* 14px */
        'cta-lg': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }], /* 18px */
        'cta-md': ['1rem', { lineHeight: '1.4', fontWeight: '600' }], /* 16px */
        'cta-sm': ['0.875rem', { lineHeight: '1.4', fontWeight: '600' }], /* 14px */
      },
      spacing: {
        '18': '4.5rem', /* 72px */
        '88': '22rem', /* 352px */
        '128': '32rem', /* 512px */
      },
      boxShadow: {
        'glassmorphic': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'glassmorphic-lg': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'cultural-glow': '0 0 20px rgba(255, 193, 7, 0.3)',
        'community-pulse': '0 0 0 0 rgba(46, 125, 50, 0.7)',
      },
      backdropBlur: {
        'glassmorphic': '20px',
      },
      animation: {
        'community-pulse': 'community-pulse 2s ease-out infinite',
        'waveform-pulse': 'waveform-pulse 1.5s ease-in-out infinite',
        'spring-bounce': 'spring-bounce 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        'community-pulse': {
          '0%': {
            'box-shadow': '0 0 0 0 rgba(46, 125, 50, 0.7)'
          },
          '70%': {
            'box-shadow': '0 0 0 20px rgba(46, 125, 50, 0)'
          },
          '100%': {
            'box-shadow': '0 0 0 0 rgba(46, 125, 50, 0)'
          }
        },
        'waveform-pulse': {
          '0%, 100%': {
            transform: 'scaleY(0.3)'
          },
          '50%': {
            transform: 'scaleY(1.8)'
          }
        },
        'spring-bounce': {
          '0%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(1.05)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        }
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'organic': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      backgroundImage: {
        'cultural-gradient': 'linear-gradient(45deg, var(--color-primary), var(--color-accent))',
        'warm-gradient': 'linear-gradient(135deg, var(--color-secondary), var(--color-vibrant-orange))',
        'glassmorphic-gradient': 'linear-gradient(135deg, rgba(46, 125, 50, 0.15), rgba(0, 150, 136, 0.1))',
      },
    },
  },
  plugins: [],
} 
