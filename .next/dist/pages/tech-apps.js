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

var TechApps = function TechApps(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap with-icons' }, _react2.default.createElement(_navigation2.default, { url: url, image: 'app' }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement(_tabs2.default, {
    points: _main3.techApps
  }), _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'App Development Services'), _react2.default.createElement('p', null, 'Maybe, there are a few businesses left that can successfully function without any web and software products. But most companies can significantly improve and grow their business with a help of desktop and mobile app development, chatbots, machine learning and artificial intelligence projects, and a lot of more.'), _react2.default.createElement('p', null, 'Future-oriented FinTech companies promote themselves with banking apps, E-Commerce businesses integrate the application with other corporate tools and third-party platforms, such as payment systems, CRMs, ERPs etc.'), _react2.default.createElement('p', null, 'So here are some tips on what to consider if you want to hire App Developers:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'Do not make a decision based on a hasty Google search;'), _react2.default.createElement('li', null, 'Think twice if you want to hire the cheapest app developer possible;'), _react2.default.createElement('li', null, 'Check out company\u2019s portfolio and case studies on their website and professional social networks;'), _react2.default.createElement('li', null, 'If the company offers many different and unrelated services, it is not a good sign;'), _react2.default.createElement('li', null, 'Look for reviews and social proof of your potential partner. If possible, contact their old and/or existing clients.')), _react2.default.createElement('p', null, 'On our Keenethics spaceship, we have strong expertise in Hybrid App Development. Native iOS and native Android development services are time-consuming and usually cost a lot. If you do not have specific requirements and are not sure which platform to choose, hire App Developers to build a multi-platform solution.'), _react2.default.createElement('p', null, 'Cross-platform apps help businesses to reach a larger audience. With a hybrid app, you can go upon the Google Play Market and the App Store: one code works for all platforms and devices.'), _react2.default.createElement('p', null, 'For app development we use the following technologies:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'Phonegap;'), _react2.default.createElement('li', null, 'Cordova;'), _react2.default.createElement('li', null, 'Electron.')), _react2.default.createElement('p', null, 'Also, our astronauts are good at Progressive Web Apps development. Progressive Web App (PWA) is a hybrid of a regular website and a mobile application. This model combines features offered by most popular browsers with the features of mobile experience.'), _react2.default.createElement('h3', null, 'Hire App Developers'), _react2.default.createElement('p', null, 'For a lot of companies, in-house app development is unreasonable and very expensive. Hiring local software development service providers is not always as cost-effective as you would probably want it to be. That is why market players from different industries delegate app development to an offshore software development company.'), _react2.default.createElement('p', null, 'There are a few essential benefits of hiring an offshore app development company:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'Outsourcing is a great tool to cut costs and reduce the workload of your in-house teams.'), _react2.default.createElement('li', null, 'You get an efficient solution at a reasonable price.'), _react2.default.createElement('li', null, 'There is no need to spend time finding, hiring, and training new employees.'), _react2.default.createElement('li', null, 'The overall process of app development takes less time. Teams may work on a product round-the-clock and launch it faster.')), _react2.default.createElement('p', null, 'On our Keenethics spaceship, we believe in Agile software development and do our best to deliver top-notch product to clients. We can build a cross-platform application from scratch or update an existing one. Feel free to contact us, receive a free consultation from our astronauts and hire a team that will develop an app you need.')))));
};

TechApps.defaultProps = {
  url: {}
};

exports.default = TechApps;