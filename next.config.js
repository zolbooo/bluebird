const path = require('path');

const withPlugins = require('next-compose-plugins');

const plugins = [];

if (process.env.ANALYZE === 'true') {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
  });
  plugins.push(withBundleAnalyzer);
}
if (process.env.SERVE !== 'true') {
  const withOptimizedImages = require('next-optimized-images');
  plugins.push(
    withOptimizedImages({
      responsive: { adapter: require('responsive-loader/sharp') },
    }),
  );
}

module.exports = withPlugins(plugins, {
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });
    return config;
  },
});
