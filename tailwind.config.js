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
        background: "#0B0B09",
        surface: "#11110E",
        "surface-soft": "#161612",
        "surface-subtle": "#1A1A15",
        "surface-border": "rgba(244, 233, 208, 0.10)",
        "dark-surface": "#0B0B09",
        "dark-border": "rgba(244, 233, 208, 0.05)",
        
        primary: {
          DEFAULT: "#F4E9D0",
          muted: "#A8A29E",
          light: "#78716C",
        },
        
        accent: {
          DEFAULT: "#B89B5E",
          soft: "#D4C29A",
          pale: "#EAE1C8",
        },
        
        status: {
          success: "#1A2E24",
          "success-text": "#6A8E84",
          warning: "#332B1A",
          "warning-text": "#D4A85C",
          critical: "#2E1C1A",
          "critical-text": "#8E4C42",
          info: "#1A252E",
          "info-text": "#6A9C8E",
        }
      },
      borderRadius: {
        'card': '28px',
        'card-lg': '30px',
        'control': '16px',
        'pill': '9999px',
      },
      boxShadow: {
        'card': '0 8px 30px rgba(0, 0, 0, 0.4)',
        'floating': '0 18px 50px rgba(0, 0, 0, 0.6)',
        'soft-sm': '0 4px 12px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
