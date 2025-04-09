import typography from '@tailwindcss/typography'
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        'var(--font-raleway)',
        'ui-sans-serif',
        'system-ui'
      ],
      body: [
        'var(--font-raleway)',
        'ui-sans-serif',
        'system-ui'
      ],
      heading: [
        'var(--font-clash-display)',
        'ui-sans-serif',
        'system-ui'
      ],
      serif: [
        'var(--font-clash-display)',
        'ui-sans-serif',
        'system-ui'
      ]
    },
    screens: {
      'desktop-l': { max: '1440px' },
      'desktop-m': { max: '1280px' },
      'desktop-s': { max: '1120px' },
      'tablet-l': { max: '920px' },
      'tablet-m': { max: '768px' },
      'tablet-s': { max: '562px' },
      'mobile-l': { max: '414px' },
      'mobile-m': { max: '375px' }
    },
    fontSize: {
      // 'heading-9-xl': ['clamp(3.125rem, 0.6535rem + 9.5517vw, 9.25rem)', { lineHeight: '1.5' }],
      // 'heading-8-xl': ['120px', { lineHeight: '1.5' }],
      // 'heading-7-xl': ['95px', { lineHeight: '1.5' }],
      // 'heading-6-xl': ['76px', { lineHeight: '1.5' }],
      // 'heading-5-xl': ['61px', { lineHeight: '1.5' }],
      // 'heading-4-xl': ['49px', { lineHeight: '1.5' }],
      // 'heading-3-xl': ['39px', { lineHeight: '1.5' }],
      // 'heading-2-xl': ['31px', { lineHeight: '1.5' }],
      // 'heading-xl': ['25px', { lineHeight: '1.5' }],
      // 'heading-l': ['20px', { lineHeight: '1.5' }],
      // 'heading-base': ['16px', { lineHeight: '1.2' }],
      // 'heading-s': ['13px', { lineHeight: '1.2' }],
      // 'heading-xs': ['10px', { lineHeight: '1.2' }],
      'heading-9-xl': ['clamp(3.125rem, 0.6535rem + 9.5517vw, 9.25rem)', { lineHeight: '1.5' }],
      'heading-8-xl': ['clamp(2.875rem, 1.0088rem + 7.2125vw, 7.5rem)', { lineHeight: '1.5' }],
      'heading-7-xl': ['clamp(2.5rem, 1.0877rem + 5.4581vw, 6rem)', { lineHeight: '1.5' }],
      'heading-6-xl': ['clamp(2.25rem, 1.2412rem + 3.8986vw, 4.75rem)', { lineHeight: '1.5' }],
      'heading-5-xl': ['clamp(2rem, 1.2434rem + 2.9240vw, 3.875rem)', { lineHeight: '1.5' }],
      'heading-4-xl': ['clamp(1.75rem, 1.2456rem + 1.9493vw, 3rem)', { lineHeight: '1.5' }],
      'heading-3-xl': ['clamp(1.625rem, 1.2719rem + 1.3645vw, 2.5rem)', { lineHeight: '1.5' }],
      'heading-2-xl': ['clamp(1.375rem, 1.1228rem + 0.9747vw, 2rem)', { lineHeight: '1.5' }],
      'heading-xl': ['clamp(1.25rem, 1.1491rem + 0.3899vw, 1.5rem)', { lineHeight: '1.5' }],
      'heading-l': ['clamp(1.125rem, 1.0746rem + 0.1949vw, 1.25rem)', { lineHeight: '1.5' }],
      'heading-base': ['15px', { lineHeight: '1.2' }],
      'heading-s': ['14px', { lineHeight: '1.2' }],

      /* Body font sizes */
      // 'body-xl': ['clamp(2rem, 1.0629rem + 1.5968vw, 2.5rem)', { lineHeight: '1.2' }],
      // 'body-l': ['clamp(1.25rem, 0.7814rem + 0.7984vw, 2rem)', { lineHeight: '1.2' }],
      // 'body-m': ['clamp(1rem, 0.0629rem + 1.5968vw, 1.5rem)', { lineHeight: '1.2' }],
      // 'body-s': ['clamp(0.875rem, 0.6407rem + 0.3992vw, 1rem)', { lineHeight: '1.2' }],
      // 'body-xs': ['clamp(0.75rem, 0.5157rem + 0.3992vw, 0.875rem)', { lineHeight: '1' }],
      'body-xl': ['25px', { lineHeight: '1.5' }],
      'body-l': ['20px', { lineHeight: '1.5' }],
      'body-m': ['17px', { lineHeight: '1.5' }],
      'body-s': ['15px', { lineHeight: '1.5' }],
      'body-xs': ['10', { lineHeight: '1.5' }],
    },
    colors: {
      'ehbo-orange': {
        400: '#FF954C',
        500: '#FF7B1F',
        600: '#E8701C',
        700: '#D04C13',
      },
      'lake-lime': {
        50: '#E7EAEA',
        100: '#B6BFBF',
        200: '#92A0A0',
        300: '#617575',
        400: '#425A5A',
        500: '#133131',
        600: '#112D2D',
        700: '#0D2323',
        800: '#0A1B1B',
        900: '#081515'
      },
      'bleek-lime': {
        400: '#C7FF51',
        500: '#B9FF25',
        600: '#A8E822',
        800: '#668C14'
      },
      'tidal-turquoise': {
        400: '#4AFBE5',
        500: '#FF7B1F',
        600: '#1AE4CB'
      },
      'off-white': {
        100: '#FDFCF9',
        200: '#FCFAF6',
        300: '#FBF8F2',
        400: '#FAF6EF',
        500: '#F9F4EB',
        600: '#E3DED6',
        900: '#696663'
      }
    },
  },
  plugins: [
    typography,
  ],
};

export default config;
