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

var TechAppsProg = function TechAppsProg(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, {
    url: url,
    image: 'app',
    points: _main3.techApps
  }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'Progressive Web App Development Services'), _react2.default.createElement('p', null, 'Let us start from the beginning. So what are progressive web apps and why are they becoming so popular? Unlike traditional applications, progressive web apps (PWA) are a hybrid of regular websites and mobile applications. This model attempts to combine features offered by most modern browsers with the benefits of mobile experience.'), _react2.default.createElement('p', null, 'According to Google Developers website, a Progressive Web App uses modern web capabilities to deliver an app-like user experience.'), _react2.default.createElement('p', null, 'What is the key benefit of launching progressive web apps? With a help of a Progressive Web App, you can reach more users beyond the App Store for iOS users and the Google Play for Android users. In other words, you receive access to a large market of users and, therefore, an opportunity to grow engagement and increase conversions. But there is more to say. Top progressive web apps features are more than that. Long story short:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'Progressive apps work for every user, no matter which browser or mobile platform he prefers;'), _react2.default.createElement('li', null, 'There is no complex installation process;'), _react2.default.createElement('li', null, 'Desktop, mobile, tablet \u2013 it does not matter. Progressive web apps are responsive;'), _react2.default.createElement('li', null, 'With a help of a service worker, they load instantly, regardless of the network state;'), _react2.default.createElement('li', null, 'You know that 53% of users will leave a site if it takes longer than 3 seconds to load. And once loaded, users expect them to be fast, no scrolling or slow-to-respond interfaces. Notice, that progressive web app developers know how to make your app fast.'), _react2.default.createElement('li', null, 'Served via HTTPS to prevent snooping and to ensure content has not been tampered with. In other words, progressive web apps are safe.')), _react2.default.createElement('p', null, 'Ordering Progressive App Development Services is a great idea if you want to cover a big market and do not see the reason to spend your budget on iOS App Development, Android App Development, and Website Development Services. And this is another undeniable plus of developing progressive web apps instead of native ones.'), _react2.default.createElement('h3', null, 'Hire Progressive Web App Developers'), _react2.default.createElement('p', null, 'If you want to build a progressive web app, hire an experienced software development provider. Often local market players have high rates, so many companies, especially from the USA and European Countries, consider offshore and nearshore vendors. You can find both giant software development providers and middle-sized or small companies, so take a look at the company\'s field of expertise.'), _react2.default.createElement('p', null, 'On our Keenethics spaceship, progressive web app development is one of the main services. You can find some progressive web apps examples in our portfolio to make sure that our astronauts have all required knowledge and a solid experience to build high-class products. Contact us anytime and deliver an amazing experience to your users.')))));
};

TechAppsProg.defaultProps = {
  url: {}
};

exports.default = TechAppsProg;