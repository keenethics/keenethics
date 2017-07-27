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

var TechDataBaseMysql = function TechDataBaseMysql(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, {
    url: url,
    image: 'be',
    points: _main3.techDatabase
  }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'MySQL Development'), _react2.default.createElement('p', null, 'When launching a website or a mobile app, you will need to involve MySQL developers in your project. In short, MySQL is a database management system. It is owned by Oracle Corporation, a multinational computer technology corporation, headquartered in California. The company specializes in developing and marketing database software and technology, cloud engineered systems and enterprise software products.'), _react2.default.createElement('p', null, 'MySQL is offered under two different editions:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'the open source MySQL Community Server;'), _react2.default.createElement('li', null, 'the proprietary Enterprise Server.')), _react2.default.createElement('p', null, 'The open source MySQL edition is being used for small to medium web pages. MySQL development has one major advantage: since it is free, it is usually available on shared hosting packages and can be easily set up in a Linux, Unix or Windows environment.'), _react2.default.createElement('p', null, 'MySQL Enterprise Edition includes a set of advanced features, management tools and technical support to achieve the highest levels of MySQL scalability, security, reliability, and uptime. It reduces the risk, cost, and complexity in developing, deploying, and managing business-critical MySQL applications.'), _react2.default.createElement('p', null, 'MySQL is a central component of the LAMP (an acronym for Linux, Apache, MySQL, Perl/PHP/Python) open-source web application software stack. Also, MySQL database development is being used when building database applications with Node.js.'), _react2.default.createElement('p', null, 'In the list of MySQL customers you will find such giants as Google, Facebook, PayPal, YouTube, eBay, Twitter, UBER, LinkedIn, CISCO, Tesla, Netflix, Alibaba.com and others.'), _react2.default.createElement('h3', null, 'MySQL Developers'), _react2.default.createElement('p', null, 'If hiring a MySQL development professional on your local market is not budget-friendly, you can always look for developers abroad. This decision can be a hard to make because it is not easy to find a trustworthy software development service provider. Here are some general tips on how to choose a strong MySQL development company:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'Find as many information about the company as you can;'), _react2.default.createElement('li', null, 'Look for feedbacks (for example, on Upwork, Clutch and so on);'), _react2.default.createElement('li', null, 'Check similar projects in company\u2019s portfolio, look for live projects;'), _react2.default.createElement('li', null, 'After sending the first request, pay attention on how does the company respond.')), _react2.default.createElement('p', null, 'On our Keenethics spaceship, we have MySQL developers, Mongo, PostgreSQL and Neo4j database developers. Contact our astronauts and get a professional advice on which database will suit your project.')))));
};

TechDataBaseMysql.defaultProps = {
  url: {}
};

exports.default = TechDataBaseMysql;