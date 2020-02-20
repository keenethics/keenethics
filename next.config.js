const withSass = require('@zeit/next-sass');
const webpack = require('webpack');

require('dotenv-safe').config();

module.exports = withSass({
  generateBuildId: async () => `build-${Date.now()}`,
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin([
      'REACT_APP_SPACE_ID',
      'REACT_APP_ACCESS_TOKEN',
      'REACT_APP_PREVIEW_TOKEN',
    ]));

    return config;
  },
});
