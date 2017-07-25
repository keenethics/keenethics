const postcss = require('postcss-easy-import')({ prefix: '_' });
const autoprefixer = require('autoprefixer')({ });
const csso = require('postcss-csso')({ });

module.exports = {
  plugins: [
    postcss,
    autoprefixer,
    csso,
  ],
};
