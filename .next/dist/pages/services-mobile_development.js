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

var ServicesMobileDevelopment = function ServicesMobileDevelopment(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap with-icons' }, _react2.default.createElement(_navigation2.default, { url: url, image: 'mobile_development' }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement(_tabs2.default, {
    points: _main3.servicesMobileDevelopment,
    withDescription: true
  }), _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'Mobile Development'), _react2.default.createElement('p', null, 'According to statistics, people check their smartphone almost 300 times a day. Teens snap lock button even more often. We touch our phones almost every minute, check for new notifications and messages.'), _react2.default.createElement('p', null, 'This trend progress through years and will grow even more. Search engines optimize mobile index, the percentage of searches and purchases from mobile devices is growing exponentially. These are the arguments for mobile application development for business.'), _react2.default.createElement('p', null, 'What applications need the business now? Sleek-designed. Social \u2013 we all love to share everything on Facebook and Twitter. Compatible with the smartwatch or fitness bracelet - wearable devices become a permanent accessory for everyone. If you want to know more, get in touch. Successful mobile app starts with a strategy and understanding of its functions and tasks.'), _react2.default.createElement('p', null, 'Mobile app development is a time-consuming and creative process at the same time. If we want to make a mobile app that is talked about, downloaded and opened again and again, it`s not enough to make just a technically perfect product. We need to invest in it all the knowledge and inspiration. Both, the app developers team and business side must get involved to a process. We give you the mobile application development tools your company needs to get idea to market.'), _react2.default.createElement('p', null, 'Not sure what type of application do you exactly need? Let us help you choose. Native applications, custom mobile application development - our approach to choosing type and app developing is based on your business` features. We are the fans of agile, analytics-driven approach. Analyze, build, test, launch, get feedback.'), _react2.default.createElement('p', null, 'Not decided on the platform, or choosing the main platform? We provide professional android application development, iOS development and cross platform mobile development.'), _react2.default.createElement('p', null, 'We have a clear and easy monitoring and reporting system. We are pleased to develop mobile applications for your business and we`ll not be embarrassed if you watch the process.'), _react2.default.createElement('p', null, 'We\'re not calling ourselves the best. We just say that we`ll take your cool idea and make it even better.')))));
};

ServicesMobileDevelopment.defaultProps = {
  url: {}
};

exports.default = ServicesMobileDevelopment;