const env = require('./env.config.js');

module.exports = {
  'presets': [
    'next/babel',
  ],
  'plugins': [
    [
      'transform-define',
      env
    ],
  ],
  "env": {
    "test": {
      "plugins": [
        "@babel/plugin-transform-runtime",
      ]
    }
  }
};
