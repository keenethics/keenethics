'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _promisePolyfill = require('promise-polyfill');

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

var _head = require('./head');

var _head2 = _interopRequireDefault(_head);

var _main = require('./navigation/main');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined' && !window.Promise) {
  window.Promise = _promisePolyfill2.default;
} /* global window */

var Layout = function Layout(_ref) {
  var children = _ref.children,
      currentURL = _ref.currentURL;
  return _react2.default.createElement('div', { className: 'root' }, _react2.default.createElement(_head2.default, null), _react2.default.createElement(_main2.default, { currentURL: currentURL }), children);
};

Layout.defaultProps = {
  children: null,
  currentURL: {}
};

exports.default = Layout;