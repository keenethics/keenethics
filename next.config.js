const withSass = require('@zeit/next-sass');
const Dotenv = require('dotenv-webpack');

module.exports = withSass({
  generateBuildId: async () => `build-${Date.now()}`,
  webpack(config) {
    config.plugins.push(new Dotenv({ path: process.env.ENV_PATH }));

    return config;
  },
});
