'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.onRouteChangeStart = function () {
  return _nprogress2.default.start();
};
_index2.default.onRouteChangeComplete = function () {
  return _nprogress2.default.done();
};
_index2.default.onRouteChangeError = function () {
  return _nprogress2.default.done();
};

var LayoutHead = function LayoutHead() {
  return _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'KEEN.ETHICS'), _react2.default.createElement('meta', { charSet: 'utf-8' }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('link', { type: 'text/css', rel: 'stylesheet', href: '/static/main.css' }), _react2.default.createElement('link', { type: 'image/vnd.microsoft.icon', rel: 'icon', href: '/static/images/favicon.ico' }), _react2.default.createElement('link', { type: 'image/x-icon', rel: 'shortcut icon', href: '/static/images/favicon.ico' }));
};

exports.default = LayoutHead;