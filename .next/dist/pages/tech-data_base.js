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

var TechDataBase = function TechDataBase(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap with-icons' }, _react2.default.createElement(_navigation2.default, { url: url, image: 'db' }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement(_tabs2.default, {
    points: _main3.techDatabase
  }), _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'Database Development Services'), _react2.default.createElement('p', null, 'More than 95% of web-based products and services require database development and support. If you are about to build something more complex than a static page, you will definitely need to find database developers to join your team.'), _react2.default.createElement('p', null, 'On our Keenethics spaceship, we have experience in database development using the following database systems:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'Mongo;'), _react2.default.createElement('li', null, 'MySQL;'), _react2.default.createElement('li', null, 'PostgreSQL.')), _react2.default.createElement('p', null, 'The concrete choice often is based on the type of technologies used on the project before. If the project starts from sketch, together we can choose a database, that will satisfy all the requirements and suit the project in the most effective way. Each of these database development systems works great. The thing is to use them in the right context.'), _react2.default.createElement('p', null, 'MySQL database is the most popular and often used when it comes to developing corporate websites, online stores, marketplaces, and other typical web-based products. Many startups, large companies, and government agencies choose MongoDB Development. With MongoDB, our astronauts can build and deploy a highly scalable and performance-oriented database. Choose Mongo DB, if you expect a high write load and need high availability in an unreliable environment (Cloud and Real Life). Another system, PostgreSQL Database is reliability and stable, it is extremely responsive in high volume environments.'), _react2.default.createElement('p', null, 'If you hesitate, contact our database developers and tell more about your project to find the most cost-effective and reasonable solution.'), _react2.default.createElement('h3', null, 'Hire Database Developers'), _react2.default.createElement('p', null, 'Depending on your business goals, software and database development can cost a fortune. To keep the budget within reason and accelerates time-to-market, many companies cooperate with offshore software development providers.'), _react2.default.createElement('p', null, 'Some of the most successful products that we use today were outsourced. Some of the examples are Slack, GitHub, Alibaba, and UpWork, among many others.'), _react2.default.createElement('p', null, 'When hiring an offshore Database Development company, follow these tips:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'Make a thought-out decision, do not hire in a hurry;'), _react2.default.createElement('li', null, 'Avoid companies with suspiciously low rates and a wide range of services;'), _react2.default.createElement('li', null, 'Check company\u2019s portfolio, case studies and look for related projects;'), _react2.default.createElement('li', null, 'If possible, search for references and feedbacks, check professional networks.')), _react2.default.createElement('p', null, 'Contact our astronauts to receive a free consultation and hire a team of Database Developers to build a top-notch product for your business.')))));
};

TechDataBase.defaultProps = {
  url: {}
};

exports.default = TechDataBase;