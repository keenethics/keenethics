
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
];

const urlPrettifier = new UrlPrettifier(routes);

exports.default = routes;

exports.Router = urlPrettifier;
