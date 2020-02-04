const withSass = require('@zeit/next-sass');
const webpack = require('webpack');

require('dotenv-safe').config();

module.exports = withSass({
  generateBuildId: async () => `build-${Date.now()}`,
  webpack(config) {
    const { rules } = config.module;
    if (rules && rules.length) {
      const scssTestIndex = rules.findIndex((el) => {
        if (el.test) return el.test.test('.scss');

        return -1;
      });

      if (scssTestIndex > -1) {
        const scssTest = rules[scssTestIndex];
        if (scssTest.use && scssTest.length) {
          const cssLoaderIndex = scssTest.use.findIndex((el) => el.loader && el.loader === 'css-loader');

          if (cssLoaderIndex > -1) {
            const cssLoader = scssTest.use[cssLoaderIndex];

            delete cssLoader.options.minimize;
          }
        }
      }
    }

    config.plugins.push(new webpack.EnvironmentPlugin([
      'REACT_APP_SPACE_ID',
      'REACT_APP_ACCESS_TOKEN',
      'REACT_APP_PREVIEW_TOKEN',
    ]));

    return config;
  },
});
