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

var TechAppsElectron = function TechAppsElectron(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, {
    url: url,
    image: 'app',
    points: _main3.techApps
  }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'Electron App Development'), _react2.default.createElement('p', null, 'Let\'s start from what is Electron and how it can improve your business. You may want to look for Electron development services when creating a cross-platform desktop application for your company or idea.'), _react2.default.createElement('p', null, 'Shortly, Electron is a framework for creating native applications with web technologies like JavaScript, HTML, and CSS. The main idea behind developing desktop apps with JavaScript is that Electron developers build one codebase and package it for each operating system separately. This fact also makes maintenance easier.'), _react2.default.createElement('p', null, 'There are 3 main benefits of Electron development:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'Electron uses Chromium and Node.js so you can build your app with HTML, CSS, and JavaScript.'), _react2.default.createElement('li', null, 'Electron is an open source project maintained by GitHub and an active community of contributors.'), _react2.default.createElement('li', null, 'Compatible with Mac, Windows, and Linux, Electron apps build and run on three platforms.')), _react2.default.createElement('p', null, 'The great thing about Electron is that Electron framework helps to focus on the core of your application. Initially developed for GitHub\'s Atom editor, Electron has since been used to create applications by companies like Microsoft, Facebook, Slack, and Docker.'), _react2.default.createElement('h3', null, 'Electron App Developers'), _react2.default.createElement('p', null, 'Hiring an offshore Electron App development company is far more cost-efficient as rates per hour usually are lower because of the location. All you need to do is to find a trustworthy software service vendor. Then there will be no need to worry about the quality of the product.'), _react2.default.createElement('p', null, 'Ukraine remains one of the top IT outsourcing destinations in Eastern Europe due to its impressive talent pool, reasonable prices, continually developing business infrastructure and interest towards new technologies and innovation.'), _react2.default.createElement('p', null, 'When choosing an offshore Electron App development company, first of all, pay attention to the stack of technologies company uses. Skilled Electron App developers must have strong expertise in HTML, CSS, JavaScript, and Node.js. If you have found an offshore software development vendor specializing in hybrid app development, it means you hit the jackpot.'), _react2.default.createElement('p', null, 'You can explore our works and find an Electron App example or contact us directly to receive some case studies and get more details.')))));
};

TechAppsElectron.defaultProps = {
  url: {}
};

exports.default = TechAppsElectron;