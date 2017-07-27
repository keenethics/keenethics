'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _reactSlick = require('react-slick');

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _reactHtmlParser = require('react-html-parser');

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _main = require('../components/layout/main');

var _main2 = _interopRequireDefault(_main);

var _main3 = require('../main.config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Careers = function (_React$Component) {
  (0, _inherits3.default)(Careers, _React$Component);

  function Careers(props) {
    (0, _classCallCheck3.default)(this, Careers);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Careers.__proto__ || (0, _getPrototypeOf2.default)(Careers)).call(this, props));

    _this.state = {
      activeItemIndex: 0,
      showApplyForm: false,
      sliderIsActive: false,
      firstname: {
        value: '',
        error: false
      },
      lastname: {
        value: '',
        error: false
      },
      position: {
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

    _this.getCareersItems = _this.getCareersItems.bind(_this);
    _this.getCareersItem = _this.getCareersItem.bind(_this);
    _this.itemClick = _this.itemClick.bind(_this);
    _this.sliderChange = _this.sliderChange.bind(_this);
    _this.sliderInit = _this.sliderInit.bind(_this);
    _this.toggleApplyForm = _this.toggleApplyForm.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    _this.onChange = _this.onChange.bind(_this);

    _this.sliderSettings = {
      swipe: true,
      infinite: false,
      centerMode: true,
      dots: true,
      arrows: true,
      variableWidth: true,
      centerPadding: 0,
      className: 'career-slider',
      afterChange: _this.sliderChange,
      initialSlide: _this.state.activeItemIndex,
      init: _this.sliderInit
    };
    return _this;
  }

  (0, _createClass3.default)(Careers, [{
    key: 'onSubmit',
    value: function onSubmit(e) {
      var _this2 = this;

      e.preventDefault();

      var activeItemIndex = this.state.activeItemIndex;

      var position = _main3.config.careers[activeItemIndex].position;

      this.setState({
        isPending: true
      });

      var state = (0, _assign2.default)(this.state, {
        position: {
          value: position,
          error: ''
        }
      });

      fetch('/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: (0, _stringify2.default)(state)
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        var responseState = {
          isPending: false,
          status: json.status.toString()
        };

        if (json && json.errorField) {
          (0, _assign2.default)(responseState, json.errorField);
        }
        _this2.setState(responseState);
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
    key: 'getCareersItems',
    value: function getCareersItems(even) {
      var _this3 = this;

      var activeItemIndex = this.state.activeItemIndex;

      return _main3.config.careers.reduce(function (acc, item, i) {
        var element = _react2.default.createElement('div', {
          key: item.position,
          role: 'presentation',
          className: activeItemIndex === i ? 'career-item active' : 'career-item',
          onClick: function onClick() {
            return _this3.itemClick(i);
          }
        }, _react2.default.createElement('img', { src: '/static/images/ships/' + item.image + '.svg', className: 'size-2', alt: '' }), _react2.default.createElement('span', null, item.position));
        if (even && i % 2 === 0) {
          acc.push(element);
        }
        if (!even && i % 2 !== 0) {
          acc.push(element);
        }

        return acc;
      }, []);
    }
  }, {
    key: 'getCareersItem',
    value: function getCareersItem() {
      var _state = this.state,
          activeItemIndex = _state.activeItemIndex,
          showApplyForm = _state.showApplyForm,
          isPending = _state.isPending,
          firstname = _state.firstname,
          lastname = _state.lastname,
          message = _state.message;
      var _config$careers$activ = _main3.config.careers[activeItemIndex],
          position = _config$careers$activ.position,
          experience = _config$careers$activ.experience,
          description = _config$careers$activ.description,
          image = _config$careers$activ.image;

      return _react2.default.createElement('div', { className: 'career-block active' }, _react2.default.createElement('div', { className: 'career-ship' }, _react2.default.createElement('img', { className: 'size-2', src: '/static/images/ships/' + image + '.svg', alt: '' })), _react2.default.createElement('div', { className: 'career-vac' }, position), _react2.default.createElement('div', { className: 'title-s' }, experience), showApplyForm || _react2.default.createElement('div', { className: 'career-main text' }, (0, _reactHtmlParser2.default)(description)), !showApplyForm || _react2.default.createElement('div', { className: 'career-main form' }, _react2.default.createElement('form', { onSubmit: this.onSubmit }, _react2.default.createElement('div', { className: 'input-wrap' }, _react2.default.createElement('input', {
        className: firstname.error ? 'error' : null,
        name: 'firstname',
        placeholder: 'First Name',
        type: 'text',
        onChange: this.onChange
      })), _react2.default.createElement('div', { className: 'input-wrap input-wrap-l' }, _react2.default.createElement('input', {
        className: lastname.error ? 'error' : null,
        name: 'lastname',
        placeholder: 'Last Name',
        type: 'text',
        onChange: this.onChange
      })), _react2.default.createElement('div', { className: 'input-wrap' }, _react2.default.createElement('textarea', {
        className: message.error ? 'error' : null,
        name: 'message',
        placeholder: 'Why you?',
        onChange: this.onChange
      })), _react2.default.createElement('button', {
        type: 'submit',
        className: isPending ? 'button button-send pending' : 'button button-send'
      }, 'Launch spaceship'))), showApplyForm || _react2.default.createElement('button', { className: 'button', onClick: this.toggleApplyForm }, 'Apply'));
    }
  }, {
    key: 'itemClick',
    value: function itemClick(activeItemIndex) {
      this.slider.slickGoTo(activeItemIndex);

      this.setState({
        activeItemIndex: activeItemIndex
      });
    }
  }, {
    key: 'sliderChange',
    value: function sliderChange(activeItemIndex) {
      this.setState({
        activeItemIndex: activeItemIndex
      });
    }
  }, {
    key: 'sliderInit',
    value: function sliderInit() {
      this.setState({
        sliderIsActive: true
      });
    }
  }, {
    key: 'toggleApplyForm',
    value: function toggleApplyForm() {
      this.setState({
        showApplyForm: !this.state.showApplyForm
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var url = this.props.url;
      var status = this.state.status;

      return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap content-wrap-bg' }, _react2.default.createElement('div', { className: 'orbit-wrap inner' }, _react2.default.createElement('ul', { className: 'orbit' }, _react2.default.createElement('li', null), _react2.default.createElement('li', null), _react2.default.createElement('li', null), _react2.default.createElement('li', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-1' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-2' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-3' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-4' }, _react2.default.createElement('span', null))), _react2.default.createElement('div', { className: 'stars-wrap' }, _react2.default.createElement('div', { className: 'stars-1' }), _react2.default.createElement('div', { className: 'stars-2' }), _react2.default.createElement('div', { className: 'stars-3' }), _react2.default.createElement('div', { className: 'stars-4' })), _react2.default.createElement('div', { className: 'content-socket-c' }, _react2.default.createElement('div', { className: 'title-page' }, _react2.default.createElement('div', { className: 'title' }, 'Careers'), _react2.default.createElement('div', { className: 'title-s' }, 'We\u2019re hiring')), _react2.default.createElement('div', { className: 'career-wrap' }, _react2.default.createElement('div', { className: this.state.sliderIsActive ? 'slider-loaded' : 'loading-slider' }, _react2.default.createElement(_reactSlick2.default, (0, _extends3.default)({ ref: function ref(s) {
          _this4.slider = s;
        } }, this.sliderSettings), _main3.config.careers.map(function (item) {
        return _react2.default.createElement('div', { key: item.position }, _react2.default.createElement('div', { className: 'career-ship' }, _react2.default.createElement('img', { className: 'size-2', src: '/static/images/ships/' + item.image + '.svg', alt: '' })), _react2.default.createElement('span', null, item.position));
      }))), _react2.default.createElement('div', { className: 'career-items left' }, this.getCareersItems(true)), _react2.default.createElement('div', { className: 'career-items right' }, this.getCareersItems()), _react2.default.createElement('div', { className: 'career-window' }, _react2.default.createElement('div', { className: 'figure-1' }), _react2.default.createElement('div', { className: 'figure-2' }), this.getCareersItem()), status ? _react2.default.createElement('div', { className: 'form-status' }, status) : null))));
    }
  }]);

  return Careers;
}(_react2.default.Component);
/* global fetch */

exports.default = Careers;


Careers.defaultProps = {
  url: {}
};