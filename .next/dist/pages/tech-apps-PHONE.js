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

var TechAppsPhone = function TechAppsPhone(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, {
    url: url,
    image: 'app',
    points: _main3.techApps
  }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'PhoneGap App Development Services'), _react2.default.createElement('p', null, 'Native iOS and native Android development services are time-consuming and usually cost a lot. Of course, if you need to reach a specially selected audience and researches show that this audience uses iPhones, building a native iOS App makes sense. But if you hesitate and are not sure which platform to choose, hire PhoneGap Developers to build a multi-platform mobile solution using an open-source framework Adobe PhoneGap.'), _react2.default.createElement('p', null, 'So what is Adobe PhoneGap and what benefits does it give? Adobe PhoneGap is Adobe\'s distribution of Apache Cordova, with some extra capabilities added by Adobe. Adobe PhoneGap platform enables developers to create an app that runs on a variety of mobile devices. Just imagine, you will not have to worry about all those different smartphones and tablets on the market. Your users will easily find whatever they need regardless of the platform and the device they prefer.'), _react2.default.createElement('p', null, 'The developer accomplishes the goal by writing the user interface portion of their application with Web technologies such as HTML, CSS, and JavaScript. Also, the developer gets access to APIs and app stores. PhoneGap\u2019s development tools then bundle the HTML, CSS, and JavaScript files into platform-specific deployment packages.'), _react2.default.createElement('p', null, 'Today, PhoneGap App Developers can support a wide variety of platforms:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'iOS;'), _react2.default.createElement('li', null, 'Android;'), _react2.default.createElement('li', null, 'Windows Phone;'), _react2.default.createElement('li', null, 'BlackBerry;'), _react2.default.createElement('li', null, 'WebOS.')), _react2.default.createElement('p', null, 'PhoneGap comes complete with plugins to support device capabilities such as the following: accelerometer, camera, contacts, file system, media playback and recording, network availability. If these capabilities are not enough, PhoneGap Developers can extend the App with plugins that enable to access more device features, including barcode scanning, Bluetooth, push notifications, text to speech, calendars, Facebook Connect and others.'), _react2.default.createElement('h3', null, 'Hire PhoneGap App Developers'), _react2.default.createElement('p', null, 'If you are looking forward to saving your budget, consider an idea of outsourcing PhoneGap Development services to a software provider. Hiring an offshore software development vendor will allow you to hire PhoneGap App Developers for more reasonable than on your local market rates.'), _react2.default.createElement('p', null, 'For example, on our Keenethics spaceship, we have experience delivering high-end cross-platform PhoneGap Apps for different businesses all around the world. Apps for Finance & Banking, Healthcare, Education, Transportation and other industries you can find in our case studies. You can feel free to ask us any questions about our projects.'), _react2.default.createElement('p', null, 'Contact us anytime and hire a team of experienced PhoneGap App developers to build an awesome App for your business in no time.')))));
};

TechAppsPhone.defaultProps = {
  url: {}
};

exports.default = TechAppsPhone;