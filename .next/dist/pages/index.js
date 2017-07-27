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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _main = require('../components/layout/main');

var _main2 = _interopRequireDefault(_main);

var _main3 = require('../components/social-buttons/main');

var _main4 = _interopRequireDefault(_main3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

    _this.state = {
      contactsIsOpen: false
    };
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: 'onClick',
    value: function onClick() {
      this.setState({
        contactsIsOpen: !this.state.contactsIsOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var url = this.props.url;
      var contactsIsOpen = this.state.contactsIsOpen;

      return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'home-page' }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement('div', { className: 'slide-block main' }, _react2.default.createElement('div', { className: 'tbl' }, _react2.default.createElement('div', { className: 'cell' }, _react2.default.createElement('div', { className: 'title-wrap' }, _react2.default.createElement('div', { className: 'title-u title-top' }, 'TOP RATED UPWORK AGENCY'), _react2.default.createElement('div', { className: 'title-main' }, 'ETHICAL ', _react2.default.createElement('br', null), 'DEVELOPMENT ', _react2.default.createElement('br', null), 'OF KEEN WEB-APPS'), _react2.default.createElement('div', { className: 'title-u' }, 'YOU HAVE A KEEN IDEA ', _react2.default.createElement('span', { className: 'dash' }), ' WE HAVE A KEEN APPROACH')), _react2.default.createElement(_main4.default, null))), _react2.default.createElement('div', { className: 'waves' }, _react2.default.createElement('div', { className: 'wave wave-1' }), _react2.default.createElement('div', { className: 'wave wave-2' })), _react2.default.createElement('div', { className: contactsIsOpen ? 'contacts open' : 'contacts' }, _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'contact-item' }, _react2.default.createElement('div', { className: 'tbl ico' }, _react2.default.createElement('div', { className: 'cell' }, _react2.default.createElement('div', { className: 'ico-svg' }, _react2.default.createElement('img', { src: '/static/images/svg/icon-map.svg', alt: '' })))), _react2.default.createElement('span', null, '3 Lytvynenka Street'), _react2.default.createElement('i', null, 'Lviv, Ukraine')), _react2.default.createElement('div', { className: 'contact-item' }, _react2.default.createElement('div', { className: 'tbl ico' }, _react2.default.createElement('div', { className: 'cell' }, _react2.default.createElement('div', { className: 'ico-svg' }, _react2.default.createElement('img', { src: '/static/images/svg/icon-mail.svg', alt: '' })))), _react2.default.createElement('a', { href: 'mailto:founders@keenethics.com' }, 'founders@keenethics.com'), _react2.default.createElement('i', null, 'Drop Us a Letter')), _react2.default.createElement('div', { className: 'contact-item' }, _react2.default.createElement('div', { className: 'tbl ico' }, _react2.default.createElement('div', { className: 'cell' }, _react2.default.createElement('div', { className: 'ico-svg' }, _react2.default.createElement('img', { src: '/static/images/svg/icon-tel.svg', alt: '' })))), _react2.default.createElement('span', null, '+380 (32) 2 535 535'), _react2.default.createElement('i', null, 'Give Us a Call'))), _react2.default.createElement('div', {
        className: contactsIsOpen ? 'contacts-st close' : 'contacts-st',
        role: 'presentation',
        onClick: this.onClick
      })), _react2.default.createElement('div', { className: 'planet' }), _react2.default.createElement('div', { className: 'orbit-wrap' }, _react2.default.createElement('ul', { className: 'orbit' }, _react2.default.createElement('li', null), _react2.default.createElement('li', null), _react2.default.createElement('li', null), _react2.default.createElement('li', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-1' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-2' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-3' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-4' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-5' }, _react2.default.createElement('span', null))), _react2.default.createElement('div', { className: 'stars-wrap' }, _react2.default.createElement('div', { className: 'stars-1' }), _react2.default.createElement('div', { className: 'stars-2' }), _react2.default.createElement('div', { className: 'stars-3' }), _react2.default.createElement('div', { className: 'stars-4' }))))));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;


Index.defaultProps = {
  url: {}
};