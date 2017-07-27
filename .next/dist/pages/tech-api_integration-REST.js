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

var _main3 = require('../main.config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TechApiIntegrationRest = function TechApiIntegrationRest(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, {
    url: url,
    image: 'be',
    points: _main3.techApiIntegration
  }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'REST Development'), _react2.default.createElement('p', null, 'Let\u2019s start from what is REST and what is its role in the software development process.'), _react2.default.createElement('p', null, 'REST is not a specific programming language nor a technology, it has no official set of tools or specification. REST development is rather a method of creating APIs (Application Programming Interface, which are methods of connecting with other libraries or applications) with certain organizational principles. It is easy to understand REST as a series of guidelines and architectural styles used for data transmission.'), _react2.default.createElement('p', null, 'REST is the most logical, efficient and widespread standard in the creation of APIs for web applications, but can pass data to software as well. The focus is on making APIs last for decades, instead of optimizing for performance. Also, REST and REST API development makes the apps horizontal growth possible.'), _react2.default.createElement('p', null, 'Following REST development principles emphasizes scalability of component interactions, generality of interfaces, independent deployment of components, and intermediary components to reduce interaction latency, enforce security, and encapsulate legacy systems.'), _react2.default.createElement('p', null, 'REST systems aim for fast performance, reliability, and the ability to grow, by reusing components that can be managed and updated without affecting the system as a whole, even while it is running. These are main reasons why we choose REST development on our Keenethics spaceship.'), _react2.default.createElement('h3', null, 'Hire REST Developers'), _react2.default.createElement('p', null, 'Most businesses, especially the rising ones, search for opportunities to keep the budget within reason. One of the ways is to assign the development part to an offshore provider that has lower rates but the same quality.'), _react2.default.createElement('p', null, 'We understand that finding a reliable nearshore vendor to develop a working software product is not an easy business decision. When hiring a REST development service provider, we suggest to you to consider:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'company\'s years of experience in general;'), _react2.default.createElement('li', null, 'similar or related projects in vendor\u2019s portfolio;'), _react2.default.createElement('li', null, 'match your project\u2019s size with provider\u2019s capabilities.')), _react2.default.createElement('p', null, 'If you want to save time, contact us and our REST developers will do their best to deliver an efficient solution to your business.')))));
};

TechApiIntegrationRest.defaultProps = {
  url: {}
};

exports.default = TechApiIntegrationRest;