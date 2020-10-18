module.exports = {
  purge: [
    './src/**/*.tsx',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      spacing: { 72: '18rem', 84: '21rem', 96: '24rem' },
      colors: {
        gray: '#c6c6c6',
        'dark-gray': '#484848',
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
};
