const withSass = require('@zeit/next-sass');

module.exports = withSass({
  webpack(config) {
    const { rules } = config.module;

    const scssTestIndex = rules.findIndex(el => el.test.test('.scss'));

    if (scssTestIndex > -1) {
      const scssTest = rules[scssTestIndex];
      const cssLoaderIndex = scssTest.use.findIndex(el => el.loader && el.loader === 'css-loader');

      if (cssLoaderIndex > -1) {
        const cssLoader = scssTest.use[cssLoaderIndex];

        delete cssLoader.options.minimize;
      }
    }

    return config;
  },
});
