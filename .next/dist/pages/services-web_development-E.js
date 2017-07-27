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

var ServicesWebDevelopmentE = function ServicesWebDevelopmentE(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, {
    url: url,
    image: 'web_development',
    points: _main3.servicesWebDevelopmentTabs
  }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'Ecommerce web development services'), _react2.default.createElement('p', null, 'Developing ecommerce websites and platforms is one of the most popular services nowadays. So what is ecommerce development and when do you need to hire a team of developers? The most common used and understandable e-commerce definition describes it as a process of buying and selling online. Therefore, if you want to deliver your products or services to a big online market, you will need to involve professionals.'), _react2.default.createElement('p', null, 'Let us take a look at e-commerce advantages and disadvantages for a business. We picked only the main pros because there are slightly more:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'access to a huge audience;'), _react2.default.createElement('li', null, 'ability to communicate directly with your customers and partners;'), _react2.default.createElement('li', null, 'gathering statistics and understanding your clients becomes easier.')), _react2.default.createElement('p', null, 'Your ecommerce website will work 24/7, giving you an opportunity to think about the strategy and creative processes.'), _react2.default.createElement('h3', null, 'Ecommerce website development cost'), _react2.default.createElement('p', null, 'Looking for offshore ecommerce development services is a safe way to keep the project budget smart. Of course, there are dozens of content around the internet and an ecommerce website development tutorial is a common helper, especially for small businesses. But we suggest you to avoid template ideas and order a powerful custom tool. So how to make a ecommerce website that will suit your business needs?'), _react2.default.createElement('p', null, 'Our astronauts create unique thought out UI/UX design and clean front end and back end code. We can integrate your website with social medias, payment proceeding systems and other required services. We use only cutting-edge technologies and certificated software to receive the highest quality.'), _react2.default.createElement('p', null, 'On our Keenethics spaceship ecommerce website development cost is reasonable and affordable for every business. As a young company, we understand our partners and strive to find the most efficient solutions keeping the budget within reason.'), _react2.default.createElement('p', null, 'An ecommerce website development process takes time if you want to get a good result. Estimates usually depend on the project\'s complexity. Depending on types of e-commerce together we will decide which one to chose. Contact us to find the best solution for your business.')))));
};

ServicesWebDevelopmentE.defaultProps = {
  url: {}
};

exports.default = ServicesWebDevelopmentE;