'use strict';

var UrlPrettifier = require('next-url-prettifier').default;

var routes = [{
  page: 'blog',
  prettyUrl: '/blog'
}, {
  page: 'post',
  prettyUrl: function prettyUrl(_ref) {
    var _ref$name = _ref.name,
        name = _ref$name === undefined ? '' : _ref$name;
    return '/blog/' + name;
  },
  prettyUrlPatterns: [{ pattern: '/blog/:name' }]
}];

var urlPrettifier = new UrlPrettifier(routes);

exports.default = routes;

exports.Router = urlPrettifier;