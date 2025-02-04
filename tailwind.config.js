/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        action: {
          lightest: '#B9D7E8',
          light: '#529EC6',
          medium: '#0070AB',
          dark: '#005582',
          darkest: '#004266',
        },
        neutral: {
          lightest: '#FFFFFF',
          light: '#ECECEC',
          medium04: '#CCCCCC',
          medium03: '#999999',
          medium02: '#666666',
          medium01: '#444444',
          dark: '#202020',
          darkest: '#000000',
        },
        alert: {
          info: '#3255E2',
          success: '#0A7C2F',
          attention: '#EBBC03',
          error: '#CC001B',
          'info-dark-theme': '#B7CCE3',
          'success-dark-theme': '#B5EAC6',
          'attention-dark-theme': '#FFDD96',
          'error-dark-theme': '#EFB4BA',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
      },
      fontSize: {
        nano: '0.75rem',
        micro: '0.875rem',
        base: '1rem',
        xxs: '1.125rem',
        xs: '1.25rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '2.5rem',
        xl: '3rem',
        xxl: '3.5rem',
        xxxl: '4.5rem',
        giant: '5.5rem',
        huge: '6.5rem',
      },
      lineHeight: {
        tightest: '1',
        tight: '1.3',
        medium: '1.5',
        loose: '1.7',
      },
      spacing: {
        nano: '4px',
        micro: '8px',
        xxxs: '12px',
        xxs: '16px',
        xs: '24px',
        sm: '32px',
        md: '40px',
        lg: '56px',
        xl: '80px',
        xxl: '120px',
        giant: '160px',
        huge: '200px',
      },
      padding: {
        'squish-nano': '4px 8px',
        'squish-micro': '8px 16px',
        'squish-sm': '12px 24px',
        'squish-md': '16px 32px',
        'squish-lg': '24px 48px',
      },
      borderWidth: {
        'stroke-100': '1px',
        'stroke-200': '2px',
        'stroke-300': '4px',
        'stroke-400': '6px',
        'stroke-500': '8px',
      },
      borderRadius: {
        'radius-100': '1px',
        'radius-200': '2px',
        'radius-300': '4px',
        'radius-400': '16px',
        'radius-pill': '9999px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
