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

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _tinytime = require('tinytime');

var _tinytime2 = _interopRequireDefault(_tinytime);

require('whatwg-fetch');

var _main = require('../components/layout/main');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global fetch */

var dateTemplate = (0, _tinytime2.default)('{MMMM} {DD}');
var timeTemplate = (0, _tinytime2.default)('{h}:{mm} {a}');

var Post = function (_React$Component) {
  (0, _inherits3.default)(Post, _React$Component);

  (0, _createClass3.default)(Post, null, [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var name = _ref.query.name;

      return { name: name };
    }
  }]);

  function Post(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Post);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Post.__proto__ || (0, _getPrototypeOf2.default)(Post)).call(this, props));

    _this.post = {};
    _this.state = {
      onLoaded: false
    };

    (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var res;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof fetch !== 'undefined' && props.name)) {
                _context.next = 8;
                break;
              }

              _context.next = 3;
              return fetch('/post/' + props.name);

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              _this.post = _context.sent;

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

  (0, _createClass3.default)(Post, [{
    key: 'render',
    value: function render() {
      var onLoaded = this.state.onLoaded;

      if (!onLoaded) return null;

      return _react2.default.createElement(_main2.default, null, _react2.default.createElement('div', { className: 'post' }, _react2.default.createElement('div', { className: 'content-wrap content-wrap-bg' }, _react2.default.createElement('div', { className: 'orbit-wrap inner' }, _react2.default.createElement('ul', { className: 'orbit' }, _react2.default.createElement('li', null), _react2.default.createElement('li', null), _react2.default.createElement('li', null), _react2.default.createElement('li', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-1' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-2' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-3' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-4' }, _react2.default.createElement('span', null))), _react2.default.createElement('div', { className: 'stars-wrap' }, _react2.default.createElement('div', { className: 'stars-1' }), _react2.default.createElement('div', { className: 'stars-2' }), _react2.default.createElement('div', { className: 'stars-3' }), _react2.default.createElement('div', { className: 'stars-4' })), _react2.default.createElement('div', { className: 'article-page' }, _react2.default.createElement('div', { className: 'content-socket-m top' }, _react2.default.createElement('div', { className: 'title-page' }, _react2.default.createElement('div', { className: 'title' }, this.post.title), _react2.default.createElement('div', { className: 'article-desc' }, _react2.default.createElement('div', { className: 'article-user' }, _react2.default.createElement('span', null, this.post.author)), _react2.default.createElement('div', { className: 'article-date' }, _react2.default.createElement('span', null, dateTemplate.render(new Date(+this.post.date))), _react2.default.createElement('span', null, timeTemplate.render(new Date(+this.post.date))))))), _react2.default.createElement('div', { className: 'content-full' }, _react2.default.createElement('div', { className: 'article-main' }, _react2.default.createElement(_reactMarkdown2.default, { source: this.post.content })), _react2.default.createElement('div', { className: 'article-btm' }, _react2.default.createElement('div', { className: 'article-social' }, _react2.default.createElement('span', null, 'Share It:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', { className: 'soc-1' }, _react2.default.createElement('a', { href: '' }, '1')), _react2.default.createElement('li', { className: 'soc-2' }, _react2.default.createElement('a', { href: '' }, '2')), _react2.default.createElement('li', { className: 'soc-3' }, _react2.default.createElement('a', { href: '' }, '3')), _react2.default.createElement('li', { className: 'soc-4' }, _react2.default.createElement('a', { href: '' }, '4')), _react2.default.createElement('li', { className: 'soc-5' }, _react2.default.createElement('a', { href: '' }, '5')))), _react2.default.createElement('div', { className: 'right-side' }, _react2.default.createElement('div', { className: 'article-s-wrap' }, _react2.default.createElement('div', { className: 'article-s' }, _react2.default.createElement('img', { width: '20', className: 'ico', src: '/static/images/svg/icon-eye.svg', alt: '' }), _react2.default.createElement('span', null, '127')), _react2.default.createElement('div', { className: 'article-s' }, _react2.default.createElement('img', { width: '18', className: 'ico', src: '/static/images/svg/icon-h-2.svg', alt: '' }), _react2.default.createElement('span', null, '65'))), _react2.default.createElement('a', { href: '', className: 'next-post' }, 'Next Post', _react2.default.createElement('span', { className: 'arrow' })))))))));
    }
  }]);

  return Post;
}(_react2.default.Component);

exports.default = Post;


Post.defaultProps = {
  name: ''
};