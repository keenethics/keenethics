'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('whatwg-fetch');

var _main = require('../components/layout/main');

var _main2 = _interopRequireDefault(_main);

var _posts = require('../components/blog/posts');

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blog = function (_React$Component) {
  (0, _inherits3.default)(Blog, _React$Component);

  function Blog(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Blog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Blog.__proto__ || (0, _getPrototypeOf2.default)(Blog)).call(this, props));

    _this.posts = [];
    _this.state = {
      onLoaded: false
    };

    (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var res;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof fetch !== 'undefined')) {
                _context.next = 8;
                break;
              }

              _context.next = 3;
              return fetch('/posts');

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              _this.posts = _context.sent;

              _this.setState({
                onLoaded: true
              });

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }))();
    return _this;
  }

  (0, _createClass3.default)(Blog, [{
    key: 'render',
    value: function render() {
      var url = this.props.url;

      return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap content-wrap-bg' }, _react2.default.createElement('div', { className: 'content-socket-m' }, _react2.default.createElement('div', { className: 'orbit-wrap inner' }, _react2.default.createElement('ul', { className: 'orbit' }, _react2.default.createElement('li', null), _react2.default.createElement('li', null), _react2.default.createElement('li', null), _react2.default.createElement('li', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-1' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-2' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-3' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-4' }, _react2.default.createElement('span', null))), _react2.default.createElement('div', { className: 'stars-wrap' }, _react2.default.createElement('div', { className: 'stars-1' }), _react2.default.createElement('div', { className: 'stars-2' }), _react2.default.createElement('div', { className: 'stars-3' }), _react2.default.createElement('div', { className: 'stars-4' })), _react2.default.createElement('div', { className: 'filter-head' }, _react2.default.createElement('div', { className: 'title' }, !this.state.onLoaded ? 'Loading...' : 'Blog')), !this.state.onLoaded ? null : _react2.default.createElement(_posts2.default, { posts: this.posts }))));
    }
  }]);

  return Blog;
}(_react2.default.Component);
/* global fetch */

exports.default = Blog;


Blog.defaultProps = {
  url: {}
};