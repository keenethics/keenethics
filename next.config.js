const withSass = require('@zeit/next-sass');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
require('dotenv-safe').config();

module.exports = withSass({
  generateBuildId: async () => `build-${Date.now()}`,
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin([
      'REACT_APP_SPACE_ID',
      'REACT_APP_ACCESS_TOKEN',
      'REACT_APP_PREVIEW_TOKEN',
    ]));
    config.plugins.push(new Dotenv());
    config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
    config.optimization.splitChunks.minChunks = 2;
    return config;
  },
});
