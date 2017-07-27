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

var _main3 = require('../main.config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global document */
/* eslint no-param-reassign: ["error", { "props": false }] */

function splitTo(arr, n) {
  var plen = Math.ceil(arr.length / n);

  return arr.reduce(function (p, c, i) {
    if (i % plen === 0) {
      p.push([]);
    }
    p[p.length - 1].push(c);

    return p;
  }, []);
}

var AboutTeam = function (_React$Component) {
  (0, _inherits3.default)(AboutTeam, _React$Component);

  function AboutTeam(props) {
    (0, _classCallCheck3.default)(this, AboutTeam);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AboutTeam.__proto__ || (0, _getPrototypeOf2.default)(AboutTeam)).call(this, props));

    _this.state = {
      image: '',
      name: '',
      position: '',
      description: '',
      pos_x: '',
      pos_y: ''
    };

    _this.onMouseOver = _this.onMouseOver.bind(_this);
    _this.onMouseOut = _this.onMouseOut.bind(_this);
    _this.getSpaceships = _this.getSpaceships.bind(_this);
    _this.getSupership = _this.getSupership.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(AboutTeam, [{
    key: 'onMouseOver',
    value: function onMouseOver(e) {
      var _e$currentTarget$data = e.currentTarget.dataset,
          img = _e$currentTarget$data.img,
          name = _e$currentTarget$data.name,
          pos = _e$currentTarget$data.pos,
          desc = _e$currentTarget$data.desc;

      var _e$currentTarget$getB = e.currentTarget.getBoundingClientRect(),
          left = _e$currentTarget$getB.left,
          top = _e$currentTarget$getB.top;

      var bodyRect = document.body.getBoundingClientRect();

      this.setState({
        image: img,
        name: name,
        position: pos,
        description: desc,
        pos_x: left - 95,
        pos_y: top + 24 - bodyRect.top,
        show: true
      });
    }
  }, {
    key: 'onMouseOut',
    value: function onMouseOut() {
      this.setState({
        show: false
      });
    }
  }, {
    key: 'getSupership',
    value: function getSupership() {
      var _this2 = this;

      return _react2.default.createElement('div', { className: 'ship-column' }, _react2.default.createElement('div', { className: 'ship main' }, _react2.default.createElement('img', { src: '/static/images/ships/spaceship.svg', alt: '' }), _main3.superteam.map(function (worker, i) {
        return _react2.default.createElement('div', { key: worker.name, className: 'worker worker-' + i, 'data-img': worker.avatar, 'data-name': worker.name, 'data-pos': 'QA', 'data-desc': worker.descriptio }, _react2.default.createElement('div', { className: 'point-flash' }, _react2.default.createElement('span', {
          onMouseOver: _this2.onMouseOver,
          onMouseOut: _this2.onMouseOut,
          'data-img': worker.avatar,
          'data-name': worker.name,
          'data-pos': worker.position,
          'data-desc': worker.description
        })));
      })));
    }
  }, {
    key: 'getSpaceships',
    value: function getSpaceships() {
      var _this3 = this;

      return _main3.team.map(function (t) {
        var spaceship = _main3.spaceships[t.key];
        var numberOfShips = Math.ceil(t.people.length / spaceship.capacity);
        var parade = splitTo(t.people, numberOfShips);

        return parade.map(function (p) {
          return _react2.default.createElement('div', { className: 'ship-column' }, _react2.default.createElement('div', { className: 'ship ' + t.key }, _react2.default.createElement('img', { src: '/static/images/ships/' + t.key + '.svg', alt: '' }), p.map(function (worker, i) {
            return _react2.default.createElement('div', { key: worker.name, className: 'worker worker-' + i, 'data-img': worker.avatar, 'data-name': worker.name, 'data-pos': 'QA', 'data-desc': worker.descriptio }, _react2.default.createElement('div', { className: 'point-flash' }, _react2.default.createElement('span', {
              onMouseOver: _this3.onMouseOver,
              onMouseOut: _this3.onMouseOut,
              'data-img': worker.avatar,
              'data-name': worker.name,
              'data-pos': worker.position,
              'data-desc': worker.description
            })));
          })));
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          image = _state.image,
          name = _state.name,
          position = _state.position,
          description = _state.description,
          pos_x = _state.pos_x,
          pos_y = _state.pos_y,
          show = _state.show;
      var url = this.props.url;

      return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap content-wrap-bg' }, _react2.default.createElement('div', { className: 'content-socket content-socket-t' }, _react2.default.createElement('div', { className: 'title-page' }, _react2.default.createElement('div', { className: 'title' }, 'Team'), _react2.default.createElement('div', { className: 'title-s' }, 'Astronaut office')), _react2.default.createElement('div', { className: 'orbit-wrap inner' }, _react2.default.createElement('ul', { className: 'orbit' }, _react2.default.createElement('li', null), _react2.default.createElement('li', null), _react2.default.createElement('li', null), _react2.default.createElement('li', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-1' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-2' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-3' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-4' }, _react2.default.createElement('span', null))), _react2.default.createElement('div', { className: 'stars-wrap' }, _react2.default.createElement('div', { className: 'stars-1' }), _react2.default.createElement('div', { className: 'stars-2' }), _react2.default.createElement('div', { className: 'stars-3' }), _react2.default.createElement('div', { className: 'stars-4' })), _react2.default.createElement('div', { className: 'ships' }, this.getSupership(), _react2.default.createElement('div', { className: 'ship-columns' }, this.getSpaceships())))), !show || _react2.default.createElement('div', {
        className: show ? 'worker-tooltip show' : 'worker-tooltip hide',
        style: {
          left: pos_x,
          top: pos_y,
          opacity: 1
        }
      }, _react2.default.createElement('div', { className: 'img' }, _react2.default.createElement('img', { src: '/static/images/team/' + image, alt: '' })), _react2.default.createElement('div', { className: 'name' }, name), _react2.default.createElement('div', { className: 'pos' }, position), _react2.default.createElement('div', { className: 'desc' }, description)));
    }
  }]);

  return AboutTeam;
}(_react2.default.Component);

exports.default = AboutTeam;


AboutTeam.defaultProps = {
  url: {}
};