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

var ApproachCuttingEdge = function ApproachCuttingEdge(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, { url: url, image: 'cut' }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'Cutting Edge Technologies'), _react2.default.createElement('p', null, 'This trend progress through years and will grow even more. Search engines optimize mobile index, the percentage of searches and purchases from mobile devices is growing exponentially. These are the arguments for mobile application development for business.'), _react2.default.createElement('p', null, 'According to statistics, people check their smartphone almost 300 times a day. Teens snap lock button even more often. We touch our phones almost every minute, check for new notifications and messages.'), _react2.default.createElement('p', null, 'What applications need the business now? Sleek-designed. Social \u2013 we all love to share everything on Facebook and Twitter. Compatible with the smartwatch or fitness bracelet - wearable devices become a permanent accessory for everyone. If you want to know more, get in touch. Successful mobile app starts with a strategy and understanding of its functions and tasks. Mobile app development is a time-consuming and creative process at the same time.'), _react2.default.createElement('p', null, 'Notice, that a good developer also needs to have experience in using windows desktop application development tools and related software. For example, with the help of rapid application development software our programmers will create your project slightly faster, so you can see the result ass soon as possible.'), _react2.default.createElement('p', null, 'Today, agile is one of the most trendy and widely used terms in project management, so we are pretty sure that you must have heard it. So what is agile and agile project and service management? What does it mean to be agile?')))));
};

ApproachCuttingEdge.defaultProps = {
  url: {}
};

exports.default = ApproachCuttingEdge;