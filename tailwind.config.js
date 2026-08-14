/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // EVORIGEN Palette (Primary Orange Theme)
        brand: {
          orange: "#FF4D00",       // Vibrant Primary Orange
          blue: "#FF4D00",         // Mapped to Orange for full compatibility
          royal: "#E03E00",        // Deep Burnt Orange
          deep: "#8C2300",         // Rich Dark Orange/Brown
          navy: "#1F0900",         // Deep Midnight Orange
          black: "#0B0D12",        // Black / Dark Text
          white: "#FFFFFF",        // White
          soft: "#F7F8FA",         // Soft White background
          border: "#E9EDF3",       // Cool Gray border
          muted: "#667085",        // Gray text
        },
        // Secondary Accents
        glow: {
          lavender: "#B9AEFF",
          cyan: "#79D9FF",
          sky: "#BBD7FF",
          yellow: "#FFF0A6",
          coral: "#FFB4B4",
          lime: "#B8F27C",
          orange: "#FF4D00",
        },
        // Legacy surface tokens mapped for backward compatibility
        background: "#FFFFFF",
        "background-deep": "#F7F8FA",
        "background-soft": "#F0F3F8",
        
        surface: "#FFFFFF",
        "surface-soft": "#F7F8FA",
        "surface-subtle": "#EEF2F8",
        "surface-border": "#E9EDF3",
        "surface-border-subtle": "#F0F3F7",
        "surface-border-strong": "#D0D7E2",
        
        primary: {
          DEFAULT: "#0B0D12",
          muted: "#667085",
          light: "#8C95A6",
          disabled: "#B8C1D1"
        },
        
        accent: {
          DEFAULT: "#FF4D00",
          soft: "#E03E00",
          bright: "#FF7033",
        },

        secondary: {
          DEFAULT: "#FF8855",
          soft: "#FFD8CC",
        },
        
        status: {
          success: "rgba(184, 242, 124, 0.2)",
          "success-text": "#1E7E34",
          warning: "rgba(255, 240, 166, 0.4)",
          "warning-text": "#855A00",
          critical: "rgba(255, 180, 180, 0.3)",
          "critical-text": "#C92A2A",
          info: "rgba(255, 77, 0, 0.08)",
          "info-text": "#FF4D00",
        }
      },
      borderRadius: {
        'card': '20px',
        'card-sm': '14px',
        'card-lg': '24px',
        'card-xl': '28px',
        'control': '12px',
        'pill': '9999px',
      },
      boxShadow: {
        'card': '0 20px 60px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.03)',
        'card-hover': '0 28px 75px rgba(255, 77, 0, 0.12), 0 2px 6px rgba(0,0,0,0.04)',
        'elevated': '0 24px 80px rgba(140, 35, 0, 0.14)',
        'floating': '0 32px 100px rgba(61, 18, 0, 0.22)',
        'glow-blue': '0 0 30px rgba(255, 77, 0, 0.25)',
        'glow-orange': '0 0 30px rgba(255, 77, 0, 0.25)',
        'glow-cyan': '0 0 30px rgba(255, 136, 85, 0.25)',
        'glow-accent': '0 10px 30px rgba(255, 77, 0, 0.2)',
      },
      fontFamily: {
        sans: ['Raleway', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        display: ['Raleway', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
