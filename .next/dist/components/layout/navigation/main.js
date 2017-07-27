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

var _reactClickOutside = require('react-click-outside');

var _reactClickOutside2 = _interopRequireDefault(_reactClickOutside);

var _point = require('./point');

var _point2 = _interopRequireDefault(_point);

var _main = require('../../../main.config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window */

var Navigation = function (_React$Component) {
  (0, _inherits3.default)(Navigation, _React$Component);

  function Navigation(props) {
    (0, _classCallCheck3.default)(this, Navigation);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).call(this, props));

    _this.state = {
      dimensions: {
        width: -1,
        height: -1
      },
      showSidebar: false
    };

    _this.getPointContent = _this.getPointContent.bind(_this);
    _this.getPointHeight = _this.getPointHeight.bind(_this);
    _this.showSidebar = _this.showSidebar.bind(_this);
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    _this.updateDimensions = _this.updateDimensions.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Navigation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.updateDimensions);

      this.updateDimensions();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions);
    }
  }, {
    key: 'getPointContent',
    value: function getPointContent(navigation, currentPoint, currentSubpoint) {
      var _this2 = this;

      var points = navigation.points;

      if (points) {
        return _react2.default.createElement('ul', { className: 'menu-sub' }, _react2.default.createElement('div', { className: 'menu-sub-inner' }, points.map(function (p, i) {
          return _react2.default.createElement(_point2.default, {
            key: p.name,
            element: p,
            height: _this2.getPointHeight(points.length),
            currentSubpoint: currentPoint && currentSubpoint === i
          });
        })));
      }

      return null;
    }
  }, {
    key: 'getPointHeight',
    value: function getPointHeight(numberOfPoints) {
      var height = this.state.dimensions.height;

      if (height / numberOfPoints > 90) {
        return 100 / numberOfPoints + '%';
      }

      return '90px';
    }
  }, {
    key: 'showSidebar',
    value: function showSidebar(e) {
      e.preventDefault();

      this.setState({
        showSidebar: true
      });
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside() {
      if (!this.state.showSidebar) {
        return;
      }

      this.setState({
        showSidebar: false
      });
    }
  }, {
    key: 'updateDimensions',
    value: function updateDimensions() {
      this.setState({
        dimensions: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          showSidebar = _state.showSidebar,
          dimensions = _state.dimensions;
      var currentURL = this.props.currentURL;
      var navigation = _main.config.navigation;

      var height = 100 / navigation.length + '%';

      var currentPoint = null;
      var currentSubpoint = null;

      navigation.forEach(function (point, i) {
        if (!currentPoint && point && point.points) {
          var subpoint = point.points.map(function (p) {
            return p.href;
          }).indexOf(currentURL.pathname);

          if (subpoint > -1) {
            currentSubpoint = subpoint;
            currentPoint = i;
          }
        }
        if (point && point.href && point.href === currentURL.pathname) {
          currentPoint = i;
        }
      });

      return _react2.default.createElement('div', { className: 'sidebar-wrapper' }, _react2.default.createElement('button', { className: 'menu-btn', onClick: this.showSidebar }, _react2.default.createElement('i', null)), _react2.default.createElement('nav', { className: showSidebar ? 'sidebar open' : 'sidebar' }, _react2.default.createElement('div', { className: 'sidebar-header' }, _react2.default.createElement(_link2.default, { href: '/', prefetch: true }, _react2.default.createElement('a', { className: 'logo' }, _react2.default.createElement('img', { src: '/static/images/svg/logo.svg', alt: 'Keenethics', width: '120px' })))), _react2.default.createElement('div', { className: 'sidebar-content' }, _react2.default.createElement('ul', { className: 'sidebar-navigation' }, navigation.map(function (n, i) {
        return _react2.default.createElement(_point2.default, {
          key: n.name,
          element: n,
          height: height,
          currentPoint: currentPoint === i,
          showSidebar: dimensions.width > 767
        }, _this3.getPointContent(n, currentPoint === i, currentSubpoint));
      }))), _react2.default.createElement('div', { className: 'sidebar-footer' }, _react2.default.createElement(_link2.default, { href: 'contacts', prefetch: true }, _react2.default.createElement('a', { className: 'button' }, 'Contact us')))));
    }
  }]);

  return Navigation;
}(_react2.default.Component);

Navigation.defaultProps = {
  currentURL: {}
};

exports.default = (0, _reactClickOutside2.default)(Navigation);