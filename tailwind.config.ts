import type { Config } from 'tailwindcss';
import tailwindCssForm from '@tailwindcss/forms';
import tailwindCssTypography from '@tailwindcss/typography';
import tailwindCssAspectRatio from '@tailwindcss/aspect-ratio';
import tailwindCssContainerQueries from '@tailwindcss/container-queries';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'blink-caret': {
          '0%, 100%': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'black' },
        },
      },
    },
  },
  plugins: [
    tailwindCssForm,
    tailwindCssTypography,
    tailwindCssContainerQueries,
    tailwindCssAspectRatio,
  ],
};
export default config;
