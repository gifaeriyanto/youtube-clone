const path = require('path');

const nextConfig = {
  // your config
  env: {
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
  },

  // webpack config
  webpack(config, { isServer }) {
    config.resolve.alias['@pages'] = path.join(__dirname, 'pages');
    config.resolve.alias['@api'] = path.join(__dirname, 'api');
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    config.resolve.alias['@utils'] = path.join(__dirname, 'utils');

    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
};

module.exports = nextConfig;
