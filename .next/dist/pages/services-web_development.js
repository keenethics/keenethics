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

var ServicesWebDevelopment = function ServicesWebDevelopment(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap with-icons' }, _react2.default.createElement(_navigation2.default, { url: url, image: 'web_development' }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement(_tabs2.default, {
    points: _main3.servicesWebDevelopmentTabs
  }), _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'Web Development Services'), _react2.default.createElement('p', null, 'If you want to go online and build a website or an app, you will definitely need to find a web development provider. Usually app and website development is taken as a process of creating a unique design for your product, front end and back end coding.'), _react2.default.createElement('p', null, 'When looking for a professional web development USA appears as a good place to start from. Hiring one of the top web development companies can burn the budget, so many small, middle-sized and large businesses prefer to find a provider with reasonable rates. Luckily you can hire an offshore web design development company and get a worthy product for the same money.'), _react2.default.createElement('h3', null, 'Professional web company'), _react2.default.createElement('p', null, 'We believe that a professional web development company not just completes the defined work on time but also gives value. Transparent processes, on-time communication and readiness to answer questions are also important.'), _react2.default.createElement('p', null, 'As a full cycle professional web company we offer a wide range of services, so you can land here and get the whole project done in one place. Wireframing, prototyping, web design web development and other services are available on our spaceship.'), _react2.default.createElement('p', null, 'As a web development company we do the coding part. At Keenethics, we use professional web development software and tools. The basic stack of technologies includes Angular, React, JavaScript and etc. for the front and Meteor, Express and others for the back end. We use only respected databases like MySQL, Mongo, Postgres. For apps we pick Electron, Phonegap and so on. We can integrate your product with other services and payment systems. So at Keenethics, you can order an e commerce web development service.'), _react2.default.createElement('p', null, 'We pay attention to both back end and front end, so your website or an app will look good and work good. It will be easy to support and maintain in the future.'), _react2.default.createElement('p', null, 'As a web design company we offer efficient UI/UX design. And as a business development company we strive to build a tool that will help you to achieve new ambitious goals on the market.')))));
};

ServicesWebDevelopment.defaultProps = {
  url: {}
};

exports.default = ServicesWebDevelopment;