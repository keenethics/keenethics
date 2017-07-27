'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nextUrlPrettifier = require('next-url-prettifier');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tinytime = require('tinytime');

var _tinytime2 = _interopRequireDefault(_tinytime);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateTemplate = (0, _tinytime2.default)('{MMMM} {DD} – {h}:{mm} {a}');

var Posts = function Posts(_ref) {
  var posts = _ref.posts;
  return _react2.default.createElement('div', { className: 'blog-grid' }, posts.map(function (post) {
    return _react2.default.createElement(_nextUrlPrettifier.Link, { route: _routes.Router.linkPage('post', { name: post.href }), key: post.title }, _react2.default.createElement('a', { className: 'art-item' }, _react2.default.createElement('div', { className: 'img' }, _react2.default.createElement('img', { src: post.image, alt: '' })), _react2.default.createElement('div', { className: 'art-desc' }, _react2.default.createElement('div', { className: 'art-desc-i' }, _react2.default.createElement('div', { className: 'date' }, dateTemplate.render(new Date(+post.date))), _react2.default.createElement('div', { className: 'title' }, post.title), _react2.default.createElement('p', null, post.subtitle))), _react2.default.createElement('div', { className: 'art-btm' }, _react2.default.createElement('div', { className: 's-item' }, _react2.default.createElement('img', { width: '20', className: 'ico', src: '/static/images/svg/icon-eye.svg', alt: '' }), '194'), _react2.default.createElement('div', { className: 's-item' }, _react2.default.createElement('img', { width: '18', className: 'ico', src: '/static/images/svg/icon-h.svg', alt: '' }), post.like || 0))));
  }));
};

Posts.defaultProps = {
  posts: []
};

exports.default = Posts;