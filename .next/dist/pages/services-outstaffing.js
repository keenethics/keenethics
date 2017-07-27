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

var _tabs = require('../components/page/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _main3 = require('../main.config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServicesOutstaffing = function ServicesOutstaffing(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap with-icons' }, _react2.default.createElement(_navigation2.default, { url: url, image: 'outstaffing' }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement(_tabs2.default, {
    points: _main3.servicesOutstaffing,
    withDescription: true
  }), _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'Outstaffing Process'), _react2.default.createElement('p', null, 'Outstaffing is the process of using by one company another\'s company staff.'), _react2.default.createElement('p', null, 'The company-customer does not enter law relations with the staff of the organization that is providing outstaffing. At the same time hired workers undertake to fulfill a list of work that is specified in the contract.'), _react2.default.createElement('p', null, 'Thus, an outstaffing company provides a part of its staff for the defined period. The customer specifies terms, time and amount of work in the contract. And from now, workers technically are registered in the outstaffing company, and will do the work for another enterprise.'), _react2.default.createElement('p', null, 'Why it is good to withdraw staff from the company? What does it give to business? Our customers, who use this approach for many years, pursue different objectives. We tried to list a few:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'The company can remain in the status of \xABsmall business\xBB, with existing staff of more than 500 people;'), _react2.default.createElement('li', null, 'The customer gets rid of the need to spend time on the process of hiring and firing;'), _react2.default.createElement('li', null, 'Customers accountants get rid of time-consuming reports and paperwork;')), _react2.default.createElement('p', null, 'This trend progress through years and will grow even more. Search engines optimize mobile index, the percentage of searches and purchases from mobile devices is growing exponentially. These are the arguments for mobile application development for business. What applications need the business now? Sleek-designed. Social \u2013 we all love to share everything on Facebook and Twitter. Compatible with the smartwatch or fitness bracelet - wearable devices become a permanent accessory for everyone. If you want to know more, get in touch. Successful mobile app starts with a strategy and understanding of its functions and tasks. Mobile app development is a time-consuming and creative process at the same time.')))));
};

ServicesOutstaffing.defaultProps = {
  url: {}
};

exports.default = ServicesOutstaffing;