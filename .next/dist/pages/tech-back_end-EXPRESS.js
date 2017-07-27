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

var TechBackEndExpress = function TechBackEndExpress(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, {
    url: url,
    image: 'be',
    points: _main3.techBackEnd
  }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'Express JS Developers'), _react2.default.createElement('p', null, 'Launching a Web or Mobile App is simple. But if you want to get more than an average result and receive an App that will stand out on the market, a stack of technologies is required. Here we will try to explain how Express JS development can improve the quality of your App.'), _react2.default.createElement('p', null, 'According to the official website, Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is the de facto standard server framework for Node.js. Such as many other frameworks, ExpressJS is a free open-source software. You will not have to add extra-costs to your budget.'), _react2.default.createElement('p', null, 'So what is ExpressJS good for and when do you need to hire a team of Express JS Developers? Mostly, ExpressJS framework is being used for creating cutting-edge Web Applications and APIs for various Desktop and Mobile platforms.'), _react2.default.createElement('p', null, 'For an Expressjs development team, creating a robust API using Expressjs is quick and easy. Furthermore, ExpressJS examples show good performance. Express provides a thin layer of fundamental web application features, without obscuring Node.js features that developers use.'), _react2.default.createElement('p', null, 'Many other frameworks, often they help to complete specific tasks, are based on Express:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'Feathers;'), _react2.default.createElement('li', null, 'ItemsAPI;'), _react2.default.createElement('li', null, 'KeystoneJS;'), _react2.default.createElement('li', null, 'LoopBack;'), _react2.default.createElement('li', null, 'Kraken and others.')), _react2.default.createElement('p', null, 'This fact proves that the ExpressJS framework is flexible and powerful enough for achieving a range of ambitious goals.'), _react2.default.createElement('h3', null, 'Hire ExpressJS Developers'), _react2.default.createElement('p', null, 'If you are not planning to hire or grow your in-house development team, look for a trustworthy Express JS development company abroad and involve a dedicated development team in your project. Data shows, that Eastern Europe is now one of the most prominent outsourcing destinations. Offshore Expressjs development companies usually offer lower rates without any lack of quality. Company\u2019s managers take care about day-to-day operations and office routine, so you can save time and spend it on strategic planning.')))));
};

TechBackEndExpress.defaultProps = {
  url: {}
};

exports.default = TechBackEndExpress;