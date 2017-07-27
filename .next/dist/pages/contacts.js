'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

require('whatwg-fetch');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _main = require('../components/layout/main');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global fetch */

var Contacts = function (_React$Component) {
  (0, _inherits3.default)(Contacts, _React$Component);

  function Contacts(props) {
    (0, _classCallCheck3.default)(this, Contacts);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Contacts.__proto__ || (0, _getPrototypeOf2.default)(Contacts)).call(this, props));

    _this.state = {
      firstname: {
        value: '',
        error: false
      },
      lastname: {
        value: '',
        error: false
      },
      email: {
        value: '',
        error: false
      },
      phone: {
        value: '',
        error: false
      },
      message: {
        value: '',
        error: false
      },
      isPending: false,
      status: ''
    };

    _this.onSubmit = _this.onSubmit.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Contacts, [{
    key: 'onSubmit',
    value: function onSubmit(e) {
      var _this2 = this;

      e.preventDefault();

      this.setState({
        isPending: true
      });

      fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: (0, _stringify2.default)(this.state)
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        var state = {
          isPending: false,
          status: json.status.toString()
        };

        if (json && json.errorField) {
          (0, _assign2.default)(state, json.errorField);
        }

        _this2.setState(state);
      });
    }
  }, {
    key: 'onChange',
    value: function onChange(_ref) {
      var target = _ref.target;

      this.setState((0, _defineProperty3.default)({}, target.name, {
        value: target.value,
        error: ''
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var url = this.props.url;
      var _state = this.state,
          isPending = _state.isPending,
          status = _state.status,
          firstname = _state.firstname,
          lastname = _state.lastname,
          email = _state.email,
          phone = _state.phone,
          message = _state.message;

      return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap content-wrap-bg' }, _react2.default.createElement('div', { className: 'orbit-wrap inner' }, _react2.default.createElement('ul', { className: 'orbit' }, _react2.default.createElement('li', null), _react2.default.createElement('li', null), _react2.default.createElement('li', null), _react2.default.createElement('li', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-1' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-2' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-3' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-4' }, _react2.default.createElement('span', null))), _react2.default.createElement('div', { className: 'stars-wrap' }, _react2.default.createElement('div', { className: 'stars-1' }), _react2.default.createElement('div', { className: 'stars-2' }), _react2.default.createElement('div', { className: 'stars-3' }), _react2.default.createElement('div', { className: 'stars-4' })), _react2.default.createElement('div', { className: 'contacts-socket' }, _react2.default.createElement('div', { className: 'title-page' }, _react2.default.createElement('div', { className: 'title' }, 'Contact Us'), _react2.default.createElement('div', { className: 'title-s' }, 'We\u2019ll answer in a moment!')), _react2.default.createElement('div', { className: 'contacts-block' }, _react2.default.createElement('ul', { className: 'contacts-stars' }, _react2.default.createElement('li', null), _react2.default.createElement('li', null), _react2.default.createElement('li', null), _react2.default.createElement('li', null)), _react2.default.createElement('div', { className: 'contacts-mail' }), _react2.default.createElement('ul', { className: 'contacts-list' }, _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '' }, _react2.default.createElement('img', { width: '15', src: '/static/images/svg/con-map.svg', alt: '', className: 'ico' }), _react2.default.createElement('div', null, '3 Lytvynenka Street'), _react2.default.createElement('span', null, 'Lviv, Ukraine'))), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '' }, _react2.default.createElement('img', { width: '15', src: '/static/images/svg/con-tel.svg', alt: '', className: 'ico' }), _react2.default.createElement('div', null, '+380 (32) 2 535 535'), _react2.default.createElement('span', null, 'Give Us a Call'))), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '' }, _react2.default.createElement('img', { width: '15', src: '/static/images/svg/con-mail.svg', alt: '', className: 'ico' }), _react2.default.createElement('div', null, 'founders@keenethics.com'), _react2.default.createElement('span', null, 'Drop Us a Letter')))), _react2.default.createElement('div', { className: 'contacts-form' }, _react2.default.createElement('form', { onSubmit: this.onSubmit }, _react2.default.createElement('div', { className: 'contacts-title' }, 'Say hello'), _react2.default.createElement('div', { className: 'input-cols' }, _react2.default.createElement('div', { className: 'input-wrap input-wrap-2' }, _react2.default.createElement('input', {
        className: firstname.error ? 'error' : null,
        name: 'firstname',
        placeholder: 'First Name',
        type: 'text',
        onChange: this.onChange
      })), _react2.default.createElement('div', { className: 'input-wrap input-wrap-2' }, _react2.default.createElement('input', {
        className: lastname.error ? 'error' : null,
        name: 'lastname',
        placeholder: 'Last Name',
        type: 'text',
        onChange: this.onChange
      }))), _react2.default.createElement('div', { className: 'input-cols' }, _react2.default.createElement('div', { className: 'input-wrap input-wrap-2 input-wrap-l' }, _react2.default.createElement('input', {
        className: email.error ? 'error' : null,
        name: 'email',
        placeholder: 'Your Email',
        type: 'mail',
        onChange: this.onChange
      })), _react2.default.createElement('div', { className: 'input-wrap input-wrap-2 input-wrap-l' }, _react2.default.createElement('input', {
        className: phone.error ? 'error' : null,
        name: 'phone',
        placeholder: 'Your Phone',
        type: 'tel',
        onChange: this.onChange
      }))), _react2.default.createElement('div', { className: 'input-wrap input-wrap-2 input-wrap-ta' }, _react2.default.createElement('textarea', {
        className: message.error ? 'error' : null,
        name: 'message',
        placeholder: 'Message',
        onChange: this.onChange
      })), status ? _react2.default.createElement('div', { className: 'form-status' }, status) : null, _react2.default.createElement('button', {
        type: 'submit',
        className: isPending ? 'button button-send pending' : 'button button-send'
      }, _react2.default.createElement('img', { src: '/static/images/svg/send.svg', alt: '' }))))))));
    }
  }]);

  return Contacts;
}(_react2.default.Component);

exports.default = Contacts;


Contacts.defaultProps = {
  url: {}
};