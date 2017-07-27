'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _main = require('../../main.config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageNavigation = function (_React$Component) {
  (0, _inherits3.default)(PageNavigation, _React$Component);

  function PageNavigation(props) {
    (0, _classCallCheck3.default)(this, PageNavigation);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PageNavigation.__proto__ || (0, _getPrototypeOf2.default)(PageNavigation)).call(this, props));

    _this.points = _this.getPoints();

    _this.getPoints = _this.getPoints.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(PageNavigation, [{
    key: 'getPoints',
    value: function getPoints() {
      var _props = this.props,
          url = _props.url,
          points = _props.points;

      var currentPoints = {
        prev: {},
        current: {},
        next: {}
      };

      if (points && points.length) {
        points.forEach(function (navigation, i) {
          var index = navigation.href === url.pathname ? i : -1;

          if (index > -1) {
            currentPoints.current = points[index];

            if (points[index + 1]) {
              currentPoints.next = points[index + 1];
            } else {
              currentPoints.next = points[0];
            }

            if (points[index - 1]) {
              currentPoints.prev = points[index - 1];
            } else {
              currentPoints.prev = points[points.length - 1];
            }
          }
        });
      }

      if (url && url.pathname) {
        _main.config.navigation.forEach(function (navigation, i) {
          if (navigation.points) {
            var index = navigation.points.map(function (point) {
              return point.href;
            }).indexOf(url.pathname);

            if (index > -1) {
              var currentNav = _main.config.navigation[i].points;

              currentPoints.current = currentNav[index];

              if (currentNav[index + 1]) {
                currentPoints.next = currentNav[index + 1];
              } else {
                currentPoints.next = currentNav[0];
              }

              if (currentNav[index - 1]) {
                currentPoints.prev = currentNav[index - 1];
              } else {
                currentPoints.prev = currentNav[currentNav.length - 1];
              }
            }
          }
        });
      }

      return currentPoints;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          image = _props2.image,
          title = _props2.title;

      return _react2.default.createElement('div', { className: title ? 'slide-block with-menu-title' : 'slide-block' }, _react2.default.createElement('div', { className: 'slide-block-inner' }, !image || _react2.default.createElement('div', { className: 'figure-wrap' }, _react2.default.createElement('div', { className: 'tbl' }, _react2.default.createElement('div', { className: 'cell' }, _react2.default.createElement('div', { className: 'figure' }, _react2.default.createElement('img', { className: 'f-top', src: '/static/images/figures/' + image + '_top.png', alt: '' }), _react2.default.createElement('img', { className: 'f-btm', src: '/static/images/figures/' + image + '_btm.png', alt: '' }))))), !title || _react2.default.createElement('div', { className: 'slide-menu-title' }, _react2.default.createElement('span', null, title)), _react2.default.createElement('div', { className: 'tbl' }, _react2.default.createElement('div', { className: 'cell' }, _react2.default.createElement('div', { className: 'slide-navigation' }, _react2.default.createElement(_link2.default, { href: this.points.prev.href }, _react2.default.createElement('a', { className: 'slide-title slide-title-nav prev' }, _react2.default.createElement('div', { className: 'title' }, this.points.prev.name), _react2.default.createElement('div', { className: 'title-s' }, this.points.prev.description || ''))), _react2.default.createElement(_link2.default, { href: this.points.current.href }, _react2.default.createElement('a', { className: 'slide-title current' }, _react2.default.createElement('div', { className: 'title' }, this.points.current.name), _react2.default.createElement('div', { className: 'title-s' }, this.points.current.description || ''))), _react2.default.createElement(_link2.default, { href: this.points.next.href }, _react2.default.createElement('a', { className: 'slide-title slide-title-nav next' }, _react2.default.createElement('div', { className: 'title' }, this.points.next.name), _react2.default.createElement('div', { className: 'title-s' }, this.points.next.description || '')))))), _react2.default.createElement('div', { className: 'orbit-wrap inner' }, _react2.default.createElement('ul', { className: 'orbit' }, _react2.default.createElement('li', null), _react2.default.createElement('li', null), _react2.default.createElement('li', null), _react2.default.createElement('li', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-1' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-2' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-3' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-4' }, _react2.default.createElement('span', null))), _react2.default.createElement('div', { className: 'stars-wrap' }, _react2.default.createElement('div', { className: 'stars-1' }), _react2.default.createElement('div', { className: 'stars-2' }), _react2.default.createElement('div', { className: 'stars-3' }), _react2.default.createElement('div', { className: 'stars-4' }))));
    }
  }]);

  return PageNavigation;
}(_react2.default.Component);

exports.default = PageNavigation;


PageNavigation.defaultProps = {
  url: {},
  image: '',
  title: '',
  points: []
};