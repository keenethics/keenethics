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

var ServicesOutstaffingTeam = function ServicesOutstaffingTeam(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, {
    url: url,
    image: 'outstaffing_team',
    points: _main3.servicesOutstaffing
  }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'Dedicated team'), _react2.default.createElement('p', null, 'Outstaffing is the process of using by one company another`s company staff. The company-customer does not enter law relations with the staff of the organization that is providing outstaffing. At the same time hired workers undertake to fulfill a list of work that is specified in the contract.'), _react2.default.createElement('p', null, 'Thus, an outstaffing company provides a part of its staff for the defined period. The customer specifies terms, time and amount of work in the contract. And from now, workers technically are registered in the outstaffing company, and will do the work for another enterprise.'), _react2.default.createElement('p', null, 'Why it is good to withdraw staff from the company? What does it give to business? Our customers, who use this approach for many years, pursue different objectives. We tried to list a few:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'The company can remain in the status of "small business", with existing staff of more than 500 people;'), _react2.default.createElement('li', null, 'The customer gets rid of the need to spend time on the process of hiring and firing;'), _react2.default.createElement('li', null, 'Customers accountants get rid of time-consuming reports and paperwork;'), _react2.default.createElement('li', null, 'Outstaffing also eliminates the need to track time and days of working for that type of employees;'), _react2.default.createElement('li', null, 'It optimizes staffing and minimizes conflicts at the office;'), _react2.default.createElement('li', null, 'Well, and of course \u2013 outstaffing significantly optimizes the financial side.')), _react2.default.createElement('p', null, 'Which of the following benefits is more important to you \u2013 it depends on your business. At the same time, outstaffing also used when a foreign company does not have its representative office in a country or city, but wants to engage market.'), _react2.default.createElement('p', null, 'Keenethics provides outstaffing for your business. Let`s get in touch, so you can learn more and use all the outstaffing features.')))));
};

ServicesOutstaffingTeam.defaultProps = {
  url: {}
};

exports.default = ServicesOutstaffingTeam;