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

var AboutSocialSide = function (_React$Component) {
  (0, _inherits3.default)(AboutSocialSide, _React$Component);

  function AboutSocialSide(props) {
    (0, _classCallCheck3.default)(this, AboutSocialSide);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AboutSocialSide.__proto__ || (0, _getPrototypeOf2.default)(AboutSocialSide)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(AboutSocialSide, [{
    key: 'render',
    value: function render() {
      var url = this.props.url;

      return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap content-wrap-bg' }, _react2.default.createElement('div', { className: 'content-socket content-socket-a' }, _react2.default.createElement('div', { className: 'title-page' }, _react2.default.createElement('div', { className: 'title' }, 'Social Side'), _react2.default.createElement('div', { className: 'title-s' }, 'Other side of our team')), _react2.default.createElement('div', { className: 'orbit-wrap inner' }, _react2.default.createElement('ul', { className: 'orbit' }, _react2.default.createElement('li', null), _react2.default.createElement('li', null), _react2.default.createElement('li', null), _react2.default.createElement('li', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-1' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-2' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-3' }, _react2.default.createElement('span', null)), _react2.default.createElement('div', { className: 'orbit-star orbit-star-4' }, _react2.default.createElement('span', null))), _react2.default.createElement('div', { className: 'stars-wrap' }, _react2.default.createElement('div', { className: 'stars-1' }), _react2.default.createElement('div', { className: 'stars-2' }), _react2.default.createElement('div', { className: 'stars-3' }), _react2.default.createElement('div', { className: 'stars-4' }))), _react2.default.createElement('div', { className: 'content-full' }, _react2.default.createElement('div', { className: 'ser-wrap ser-quality' }, _react2.default.createElement('a', { className: 'ser-item', href: 'about-social_side-inner' }, _react2.default.createElement('div', { className: 'ico' }, _react2.default.createElement('span', null, _react2.default.createElement('img', { href: '', width: 36, src: '/static/images/svg/s-1.svg', alt: '' }))), _react2.default.createElement('div', { className: 'ser-ttl' }, 'Extra Profit For Social Needs'), _react2.default.createElement('div', { className: 'ser-text' }, 'We have our own internal projects and so we do understand that even the perfect')), _react2.default.createElement('a', { className: 'ser-item', href: 'about-social_side-inner' }, _react2.default.createElement('div', { className: 'ico' }, _react2.default.createElement('span', null, _react2.default.createElement('img', { width: 48, src: '/static/images/svg/s-2.svg', alt: '' }))), _react2.default.createElement('div', { className: 'ser-ttl' }, 'Drive JS Community'), _react2.default.createElement('div', { className: 'ser-text' }, 'We have our own internal projects and so we do understand that even the perfect')), _react2.default.createElement('a', { className: 'ser-item', href: 'about-social_side-inner' }, _react2.default.createElement('div', { className: 'ico' }, _react2.default.createElement('span', null, _react2.default.createElement('img', { width: 30, src: '/static/images/svg/s-3.svg', alt: '' }))), _react2.default.createElement('div', { className: 'ser-ttl' }, 'Design Educational Projects'), _react2.default.createElement('div', { className: 'ser-text' }, 'We have our own internal projects and so we do understand that even the perfect'))), _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('p', null, 'Backend development - is the process of programming the site and filling it with functional. Creating a core site, site development platform, filling it with basic functionality and creation of the administrative area - this is the backend development.', _react2.default.createElement('br', null), 'Website backend development process is a web programming, the purpose of which is to implement server-side of site, integrate database connect it with user\'s (front-end) side. Backend development also includes software setup on a server.'), _react2.default.createElement('p', null, 'The frontend sends information and commands from the user to the website backend, and that in turn makes their processing. In short, front-end is created for the users and back-end for admins.'), _react2.default.createElement('p', null, 'Backend developer must have a basic programming skills. It\'s a coding systems and languages for every field of development. Java and C# are, maybe, the most popular programming languages for now. But who knows, times change, web and app development grows, Ruby, Javascript and Python are catching up. Backend development requires a database skill.'), _react2.default.createElement('p', null, 'A majority of e-commerce websites have databases, so this expertise is also basic for backend developers.'), _react2.default.createElement('p', null, 'It\'s not so easy to code. It\'s even harder to code good stuff. A good coder must know backend development tools. It means that good backend coder makes a complex from development tools and \u201Chand-made code\u201D. Besides, we do believe that high-skilled backend developer must know both frontend and backend tools.')))));
    }
  }]);

  return AboutSocialSide;
}(_react2.default.Component);

exports.default = AboutSocialSide;


AboutSocialSide.defaultProps = {
  url: {}
};