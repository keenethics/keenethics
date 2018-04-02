const UrlPrettifier = require('next-url-prettifier').default;

const routes = [
  {
    page: 'blog',
    prettyUrl: '/blog',
  },
  {
    page: 'post',
    prettyUrl: ({ name = '' }) => `/blog/${name}`,
    prettyUrlPatterns: [{ pattern: '/blog/:name' }],
  },
  {
    page: 'portfolio',
    prettyUrl: '/portfolio',
  },
  {
    page: 'work',
    prettyUrl: ({ name = '' }) => `/${name}`
    },
];

const urlPrettifier = new UrlPrettifier(routes);

exports.default = routes;

exports.Router = urlPrettifier;
