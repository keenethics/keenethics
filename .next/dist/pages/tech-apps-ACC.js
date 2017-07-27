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

var TechAppsAcc = function TechAppsAcc(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, {
    url: url,
    image: 'app',
    points: _main3.techApps
  }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'Accelerated Mobile Pages'), _react2.default.createElement('p', null, 'We are pretty sure that you know the fact that 40% of users click off after 3 seconds if the website did not launch. No wonder the performance of your mobile site is so important.'), _react2.default.createElement('p', null, 'There are a lot of ways to achieve those magnificent page speed results and improve the user experience. On of the most efficient is called Accelerated Mobile Pages (AMP).'), _react2.default.createElement('p', null, 'So what is AMP and who is AMP for? Accelerated Mobile Page is a project from Google and Twitter designed to make really fast mobile pages. It\'s basically a stripped-down form of HTML, a \u2018diet\u2019 HTML.'), _react2.default.createElement('p', null, 'Google AMP is a new open framework built entirely out of existing web technologies, which allows websites to build light-weight webpages. Essentially a framework for creating mobile web pages, AMP pages are built with 3 core components:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'AMP HTML is HTML with some restrictions for reliable performance;'), _react2.default.createElement('li', null, 'The AMP JS library ensures the fast rendering of AMP HTML pages;'), _react2.default.createElement('li', null, 'The Google AMP Cache can be used to serve cached AMP HTML pages.')), _react2.default.createElement('p', null, 'Therefore, it is better (and safer) to choose software developers, that have strong experience in the stack of technologies listed above.'), _react2.default.createElement('p', null, 'Who uses AMP? In the list of domains publishing AMP pages you will find E-commerce projects (Wego, Womp mobile, Milestone), publishers (The Washington Post, Nobrocker, Relay Media), advertisers (Teads.tv, plista) and others.'), _react2.default.createElement('h3', null, 'Accelerated Mobile Pages Pros and Cons'), _react2.default.createElement('p', null, 'As mentioned, Google AMP helps to make your web pages very fast and load instantly. You do not need to look for custom solutions for different platforms: iOS, Android, WinPhone, BlackBerry etc.'), _react2.default.createElement('p', null, 'What are the Google AMP cons? You will have to maintain at least two versions of any article page: The original version of your article page that users will typically see, and the AMP page version. But it is still an easy thing to do.'), _react2.default.createElement('p', null, 'Our customers often ask what is AMP for SEO and is AMP SEO-friendly. AMP have two benefits for SEO. One is it will have a \u201CFast\u201D label designation on search engine results pages, and the other is that it will be a ranking factor. So yes, for SEO AMP is good.'), _react2.default.createElement('p', null, 'On the Keenethics spaceship, our Front-End and Back-End developers know how to use all required technologies, so they can complete and AMP project in no time. You can always ask for Accelerated mobile pages example directly or check our portfolio.'), _react2.default.createElement('p', null, 'Contact us and get a tech advice on how to make your product even faster and more user-friendly.')))));
};

TechAppsAcc.defaultProps = {
  url: {}
};

exports.default = TechAppsAcc;