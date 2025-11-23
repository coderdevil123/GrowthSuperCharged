module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(0, 0%, 80%)",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(0, 0%, 0%)",
        primary: {
          DEFAULT: "#FF7A00",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "#1B1B1B",
          foreground: "hsl(0, 0%, 100%)",
        },
        accent: {
          DEFAULT: "#FFD13F",
          foreground: "#1B1B1B",
        },
        emerald: {
          dark: "hsl(160, 80%, 20%)",
          accent: "hsl(160, 80%, 35%)",
          hover: "hsl(160, 80%, 65%)",
          light: "hsl(160, 80%, 45%)",
        },
        neutral: {
          background: "hsl(160, 80%, 9%)",
          surface: "hsl(160, 80%, 14%)",
          border: "hsl(0, 0%, 80%)",
          text: {
            primary: "hsl(0, 0%, 100%)",
            secondary: "hsl(0, 0%, 80%)",
          },
        },
        navbar: {
          background: "hsl(160, 80%, 13%)",
          text: "hsl(0, 0%, 100%)",
          hover: "hsl(160, 80%, 65%)",
          mobile: "hsl(160, 80%, 10%)",
        },
        success: "hsl(120, 100%, 40%)",
        warning: "hsl(45, 100%, 60%)",
        error: "hsl(0, 100%, 50%)",
        info: "hsl(210, 100%, 50%)",
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque"', 'sans-serif'],
        serif: ['"Moret"', 'serif'],
      },
      fontSize: {
        'h1': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h3': ['32px', { lineHeight: '1.2', fontWeight: '600' }],
        'body': ['14px', { lineHeight: '1.4', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.3', fontWeight: '500' }],
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      maxWidth: {
        'container': '1440px',
      },
      borderRadius: {
        'pill': '88px',
      },
      backgroundImage: {
        'navbar-gradient': 'linear-gradient(180deg, hsl(160, 80%, 13%) 0%, hsl(160, 80%, 19%) 100%)',
        'cta-gradient': 'linear-gradient(90deg, hsl(160, 80%, 30%) 0%, hsl(160, 80%, 40%) 100%)',
        'cta-gradient-hover': 'linear-gradient(90deg, hsl(160, 80%, 35%) 0%, hsl(160, 80%, 45%) 100%)',
      },
      transitionDuration: {
        '200': '200ms',
        '250': '250ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-10%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-10%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-in-out',
        'slide-down': 'slide-down 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
