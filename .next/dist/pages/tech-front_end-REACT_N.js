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

var TechFrontEndReactNative = function TechFrontEndReactNative(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, {
    url: url,
    image: 'fe',
    points: _main3.techFrontEnd
  }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'React Native Developers'), _react2.default.createElement('p', null, 'React became one of the most popular JavaScript frameworks used for websites and web applications. Created and firstly used on Facebook, and later - Instagram, React library is being supported by a large community of skilled developers all over the world.'), _react2.default.createElement('p', null, 'But today, user experience for mobile is even more important than you might think. This fact, combined with the success of the React framework, forced developers to go beyond desktop platforms. This is how React Native came on.'), _react2.default.createElement('p', null, 'With the help of React Native developers can create powerful Hybrid Apps for iOS, Android, and Windows. Since then, many businesses decided to hire React Native Developers and make their products available for all mobile platforms at once. In some way, hybrid applications are, at core, websites packaged into a native wrapper. For example, our astronauts have delivered React Native for iOS development services. It helped our customer to save the budget and avoid overpaying. As another example, React Native for Android development saved not only the budget but also the time to deliver the app.'), _react2.default.createElement('p', null, 'Short, key benefits of Hybrid App Development are:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'Portability (one code base);'), _react2.default.createElement('li', null, 'Access to various hardware/software capabilities;'), _react2.default.createElement('li', null, 'Faster speed to market;'), _react2.default.createElement('li', null, 'More budget-friendly.')), _react2.default.createElement('p', null, 'There is a way to receive even more benefits by looking for React Native development services abroad and hiring an offshore company as a partner.'), _react2.default.createElement('h3', null, 'Hire React Native Developers'), _react2.default.createElement('p', null, 'In terms of quality and costs, Eastern Europe is the most prominent outsourcing destination. On our Keenethics spaceship, React Native Developers have all required skills and experience to develop high-class cross-platform products. We can deliver Hybrid Web App Development Services for Finance, Banking, Logistic, Healthcare and many other industries.'), _react2.default.createElement('p', null, 'Nobody has time for bad user experiences, including your customers and employees. Hire a React Native development team to give them the best experience they can get. Feel free to contact us for further information!')))));
};

TechFrontEndReactNative.defaultProps = {
  url: {}
};

exports.default = TechFrontEndReactNative;