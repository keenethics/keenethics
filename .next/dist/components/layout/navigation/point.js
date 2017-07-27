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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationPoint = function (_React$Component) {
  (0, _inherits3.default)(NavigationPoint, _React$Component);

  function NavigationPoint(props) {
    (0, _classCallCheck3.default)(this, NavigationPoint);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NavigationPoint.__proto__ || (0, _getPrototypeOf2.default)(NavigationPoint)).call(this, props));

    _this.state = {
      showChildren: props.currentPoint && props.showSidebar
    };

    _this.onMouseOver = _this.onMouseOver.bind(_this);
    _this.onMouseOut = _this.onMouseOut.bind(_this);
    _this.renderPoint = _this.renderPoint.bind(_this);
    _this.renderPointContent = _this.renderPointContent.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(NavigationPoint, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.showSidebar !== nextProps.showSidebar) {
        this.setState({
          showChildren: nextProps.currentPoint && nextProps.showSidebar
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return true;
    }
  }, {
    key: 'onMouseOver',
    value: function onMouseOver() {
      if (this.state.showChildren) {
        return;
      }
      if (!this.props.children) {
        return;
      }

      this.setState({
        showChildren: true
      });
    }
  }, {
    key: 'onMouseOut',
    value: function onMouseOut() {
      if (this.props.currentPoint) {
        return;
      }
      if (!this.props.children) {
        return;
      }

      this.setState({
        showChildren: false
      });
    }
  }, {
    key: 'renderPoint',
    value: function renderPoint() {
      var _props$element = this.props.element,
          href = _props$element.href,
          type = _props$element.type;

      if (href) {
        var attr = {
          className: 'point'
        };

        if (type && type === 'number') {
          attr.rel = 'noopener noreferrer';
          attr.target = '_blank';
        }
        return _react2.default.createElement(_link2.default, { href: href, prefetch: true }, _react2.default.createElement('a', attr, this.renderPointContent()));
      }

      return _react2.default.createElement('span', { className: 'point' }, this.renderPointContent());
    }
  }, {
    key: 'renderPointContent',
    value: function renderPointContent() {
      var _props$element2 = this.props.element,
          name = _props$element2.name,
          icon = _props$element2.icon,
          number = _props$element2.number,
          type = _props$element2.type;

      switch (type) {
        case 'icon':
          return _react2.default.createElement('span', { className: 'cell' }, _react2.default.createElement('span', { className: 'menu-ico sz-1 svg' }, _react2.default.createElement('img', { src: '/static/images/svg/' + (icon.name || '') + '.svg', alt: icon.alt || '' })), _react2.default.createElement('span', { className: 'menu-sub-nm' }, name));
        case 'number':
          return _react2.default.createElement('span', { className: 'cell' }, _react2.default.createElement('i', null, number), _react2.default.createElement('span', { className: 'menu-sub-nm' }, name));
        default:
          return _react2.default.createElement('span', { className: 'cell' }, _react2.default.createElement('span', { className: 'menu-nm-wrap' }, _react2.default.createElement('span', { className: 'menu-bg' }), _react2.default.createElement('span', { className: 'menu-nm' }, name)));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.element.name) return null;

      var _props = this.props,
          children = _props.children,
          height = _props.height,
          currentPoint = _props.currentPoint,
          currentSubpoint = _props.currentSubpoint;
      var showChildren = this.state.showChildren;

      return _react2.default.createElement('li', {
        className: currentPoint || currentSubpoint ? 'current' : null,
        role: 'presentation',
        style: { height: height },
        onMouseEnter: this.onMouseOver,
        onMouseLeave: this.onMouseOut
      }, this.renderPoint(), showChildren ? children : null);
    }
  }]);

  return NavigationPoint;
}(_react2.default.Component);

exports.default = NavigationPoint;


NavigationPoint.defaultProps = {
  children: null,
  element: {
    name: '',
    href: '',
    icon: {
      name: '',
      alt: ''
    },
    number: '01',
    type: ''
  },
  height: '0px',
  currentPoint: false,
  currentSubpoint: false,
  showSidebar: false
};