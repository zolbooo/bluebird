module.exports = {
  purge: [],
  theme: {
    extend: {
      spacing: { 72: '18rem', 84: '21rem', 96: '24rem' },
      colors: {
        gray: '#c6c6c6',
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
