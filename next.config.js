const path = require('path');

const nextConfig = {
  // your config

  // webpack config
  webpack(config, { isServer }) {
    config.resolve.alias['@pages'] = path.join(__dirname, 'pages');
    config.resolve.alias['@containers'] = path.join(__dirname, 'containers');

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
