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

var TechApiIntegration = function TechApiIntegration(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap with-icons' }, _react2.default.createElement(_navigation2.default, { url: url, image: 'be' }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement(_tabs2.default, {
    points: _main3.techApiIntegration
  }), _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'API Integration Services'), _react2.default.createElement('p', null, 'No future-oriented E-Commerce, Enterprise, FinTech or other similar projects can work properly without integration with one of the Payment Processing Systems. So no wonder API Integration services are highly required.'), _react2.default.createElement('p', null, 'On our Keenethics spaceship, we work only with safe world-known systems and provide:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'PayPal API Integration;'), _react2.default.createElement('li', null, 'Stripe API Integration;'), _react2.default.createElement('li', null, 'Braintree API Integration;')), _react2.default.createElement('p', null, 'Each of these systems has its pros and cons. The choice depends on many factors and if you do not know for sure it is better to consult API Integration Developers. On our spaceship, we have experience providing API Integration for a variety of businesses, from startups to solid market players. We have completed PayPal API Integration for mobile apps, landing pages, online stores, desktop apps. Stripe API Integration was done for retail markets, online services, and other digital products.'), _react2.default.createElement('h3', null, 'Hire API Integration Developers'), _react2.default.createElement('p', null, 'No matter the size of the business, you can not do everything in-house using only your existing resources. When looking for a service provider, companies often consider different outsourcing destinations.'), _react2.default.createElement('p', null, 'What are the main reasons why companies, from small to large, hire offshore software development companies? Let\u2019s take a closer look.'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'Focus on the most important business processes. Sometimes we all want to take part in everything that is going around. But let\u2019s face it: unlikely you have to participate in routine processes.'), _react2.default.createElement('li', null, 'Reduce load on the in-house teams. Outsource a part of the project, for example, API Integration services, chatbot development, website updates, or a whole project to a specialized company. This will let your employees do the job they were hired for and achieve better results instead of spending time on additional tasks.'), _react2.default.createElement('li', null, 'Cost-effectiveness. Companies save up to 40% of software development costs when outsourcing. Plus, usually, you can choose a comfortable pricing model.'), _react2.default.createElement('li', null, 'No need to find, hire and teach new employees, especially if the project is not a long-term one.')), _react2.default.createElement('p', null, 'If you have decided to outsource front end and back end development, API Integration, maintenance and support, look for trustworthy solid market players. Check your potential partner\u2019s portfolio and case studies, look for references on professional social networks, take a free consultation and ask questions.'), _react2.default.createElement('p', null, 'Whether you want to launch a landing page or build a mobile app, integrate with Payment Processing Systems or build a chatbot, delegate the work to our Keenethics spaceship and receive the result you need.')))));
};

TechApiIntegration.defaultProps = {
  url: {}
};

exports.default = TechApiIntegration;