'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _main = require('../components/layout/main');

var _main2 = _interopRequireDefault(_main);

var _navigation = require('../components/page/navigation');

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ApproachHighQuality = function ApproachHighQuality(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, { url: url, image: 'lean' }), _react2.default.createElement('div', { className: 'content-block content-block-s' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('div', { className: 'ser-wrap ser-quality' }, _react2.default.createElement('div', { className: 'ser-item' }, _react2.default.createElement('div', { className: 'ico' }, _react2.default.createElement('span', null, _react2.default.createElement('img', { width: '37', src: '/static/images/svg/q-1.svg', alt: '' }))), _react2.default.createElement('div', { className: 'ser-ttl' }, 'Code Quality Cross Reviews'), _react2.default.createElement('div', { className: 'ser-text' }, 'We have our own internal projects and so we do understand that even the perfect')), _react2.default.createElement('div', { className: 'ser-item' }, _react2.default.createElement('div', { className: 'ico' }, _react2.default.createElement('span', null, _react2.default.createElement('img', { width: '30', src: '/static/images/svg/q-2.svg', alt: '' }))), _react2.default.createElement('div', { className: 'ser-ttl' }, 'Manual and Automation Tests'), _react2.default.createElement('div', { className: 'ser-text' }, 'We have our own internal projects and so we do understand that even the perfect')), _react2.default.createElement('div', { className: 'ser-item' }, _react2.default.createElement('div', { className: 'ico' }, _react2.default.createElement('span', null, _react2.default.createElement('img', { width: '38', src: '/static/images/svg/q-3.svg', alt: '' }))), _react2.default.createElement('div', { className: 'ser-ttl' }, 'Code Linting and Standarts'), _react2.default.createElement('div', { className: 'ser-text' }, 'We have our own internal projects and so we do understand that even the perfect'))), _react2.default.createElement('p', null, 'Backend development - is the process of programming the site and filling it with functional. Creating a core site, site development platform, filling it with basic functionality and creation of the administrative area - this is the backend development. Website backend development process is a web programming, the purpose of which is to implement server-side of site, integrate database connect it with user`s (front-end) side. Backend development also includes software setup on a server.'), _react2.default.createElement('p', null, 'The frontend sends information and commands from the user to the website backend, and that in turn makes their processing. In short, front-end is created for the users and back-end for admins.'), _react2.default.createElement('p', null, 'Notice, that a good developer also needs to have experience in using windows desktop application development tools and related software. For example, with the help of rapid application development software our programmers will create your project slightly faster, so you can see the result ass soon as possible.'), _react2.default.createElement('p', null, 'Today, agile is one of the most trendy and widely used terms in project management, so we are pretty sure that you must have heard it. So what is agile and agile project and service management? What does it mean to be agile?')))));
};

ApproachHighQuality.defaultProps = {
  url: {}
};

exports.default = ApproachHighQuality;