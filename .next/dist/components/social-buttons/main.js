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

var _main = require('../../main.config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function (_React$Component) {
  (0, _inherits3.default)(Navigation, _React$Component);

  function Navigation(props) {
    (0, _classCallCheck3.default)(this, Navigation);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).call(this, props));

    _this.state = {
      showButtons: false
    };

    _this.showButtons = _this.showButtons.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Navigation, [{
    key: 'showButtons',
    value: function showButtons() {
      this.setState({
        showButtons: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var showButtons = this.state.showButtons;

      return _react2.default.createElement('ul', { className: showButtons ? 'social open' : 'social' }, _react2.default.createElement('li', { id: 'soc-btn', role: 'presentation', onClick: this.showButtons }), _main.config.social.map(function (i) {
        return _react2.default.createElement('li', { className: i.class, key: i.name }, _react2.default.createElement(_link2.default, { href: i.href }, _react2.default.createElement('a', { rel: 'noopener noreferrer', target: '_blank' }, i.name)));
      }));
    }
  }]);

  return Navigation;
}(_react2.default.Component);

exports.default = Navigation;