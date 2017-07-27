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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutTeam = function (_React$Component) {
  (0, _inherits3.default)(AboutTeam, _React$Component);

  function AboutTeam(props) {
    (0, _classCallCheck3.default)(this, AboutTeam);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AboutTeam.__proto__ || (0, _getPrototypeOf2.default)(AboutTeam)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(AboutTeam, [{
    key: 'render',
    value: function render() {
      var url = this.props.url;

      return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap content-wrap-bg' }, _react2.default.createElement('div', { className: 'content-socket content-socket-a' }, _react2.default.createElement('div', { className: 'title-page' }, _react2.default.createElement('div', { className: 'title' }, 'Open Source'), _react2.default.createElement('div', { className: 'title-s' }, 'We contribute a whole lot')), _react2.default.createElement('div', { className: 'orbit-wrap inner' }, _react2.default.createElement('ul', { className: 'orbit' }, _react2.default.createElement('li', null), _react2.default.createElement('li', null), _react2.default.createElement('li', null), _react2.default.createElement('li', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-1' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-2' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-3' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-4' }, _react2.default.createElement('span', null))), _react2.default.createElement('div', { className: 'stars-wrap' }, _react2.default.createElement('div', { className: 'stars-1' }), _react2.default.createElement('div', { className: 'stars-2' }), _react2.default.createElement('div', { className: 'stars-3' }), _react2.default.createElement('div', { className: 'stars-4' }))), _react2.default.createElement('div', { className: 'content-os' }, _react2.default.createElement('img', { className: 'mb', src: '/static/images/macbook.png', alt: '' }), _react2.default.createElement('div', { className: 'content-os-socket top' }, _react2.default.createElement('div', { className: 'title' }, 'Why Do We Support ', _react2.default.createElement('br', null), ' Open Source?'), _react2.default.createElement('a', { href: '', className: 'btn btn-g btn-ico tablet-vis' }, _react2.default.createElement('img', { className: 'ico', width: '20', src: '/static/images/svg/ico-git.svg', alt: '' }), 'VISIT OUR GITHUB')), _react2.default.createElement('div', { className: 'content-os-socket content' }, _react2.default.createElement('p', null, 'Whether you want it or not, businesses and regular users rely on open source software. Most of the servers and super-computers run Linux. Android-phones gained large market-share. Huge amount of web- and mobile-applications are built on top of open-source frameworks and libraries.'), _react2.default.createElement('p', null, 'The main reason for business to use open-source software is higher cost-efficiency. Just think about it: you can build your application on top of huge experience of previous developers. You can avoid their mistakes and take best parts from their practices. And that\u2019s usually totally free.'), _react2.default.createElement('p', null, 'For example when using JavaScript for applications you can benefit from a huge amount (around half a million) of packages available through npm. There\u2019s even a joke that you can\u2019t think of a word that isn\u2019t used as a name of package!'), _react2.default.createElement('p', null, 'node.js which is used to run JavaScript on the server-side is also totally open-source and supported by several companies. Chrome and Firefox together have more than a half of browsers\u2019 market share. And they are also open-source.'), _react2.default.createElement('p', null, 'But open source is not only about cost. It\u2019s also about quality and security. This kind of software can be improved or forked by any of it\u2019s users. Issues can be reported and fixed pretty quickly given they affect large amount of users.'), _react2.default.createElement('p', null, 'And this is where ethical approach takes place. Not only we use open-source, but also we support it. We even have it in our competencies matrix. Open-source contributions:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'can have direct benefit for a project developer works on (e. g. some bug in the framework can be fixed);'), _react2.default.createElement('li', null, 'increases code-quality of contributor: his code should pass code-review of other developers working on the same open-source project and should fit well with their architectural approach;'), _react2.default.createElement('li', null, 'improves our world and increases number of problems that can be easily resolved via open-source;')), _react2.default.createElement('p', null, 'Besides, working with open source is usually fun for those who are really passionate about software-development. When helping improve something, or when building some new library, usually you aren\u2019t limited with budget, but only with your own time. Some even treat open-source as their hobby and build truly amazing projects just via their enthusiasm.'), _react2.default.createElement('a', {
        href: 'https://github.com/keenethics',
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'btn btn-g btn-ico tablet-hide'
      }, _react2.default.createElement('img', { className: 'ico', width: '20', src: '/static/images/svg/ico-git.svg', alt: '' }), 'VISIT OUR GITHUB')))));
    }
  }]);

  return AboutTeam;
}(_react2.default.Component);

exports.default = AboutTeam;


AboutTeam.defaultProps = {
  url: {}
};