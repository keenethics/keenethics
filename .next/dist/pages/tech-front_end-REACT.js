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

var TechFrontEndReact = function TechFrontEndReact(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, {
    url: url,
    image: 'fe',
    points: _main3.techFrontEnd
  }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'React JS Developers'), _react2.default.createElement('p', null, 'React was first deployed on Facebook\'s newsfeed and later on Instagram. Today, React is one of the most often used open-source JavaScript libraries for building user interfaces. But do you really need React JS developers on your project? Or using the basic front-end technology stack will be enough?'), _react2.default.createElement('p', null, 'The decision depends on your project. React is the most efficient way to build big, fast Web apps with JavaScript. React JS presents shape solutions to some of the front-end programming issues. React JS development is scalable, flexible, and powerful. When using only JavaScript can take a lot of time, using React makes the process go significantly faster. With a help of a fast-growing developer community, developers can implement a wide range of ideas and deliver cutting-edge products.'), _react2.default.createElement('p', null, 'But what if you want to build a website and mobile app? React Native enables native iOS, Android and UWP development with React. On our spaceship, we have experience creating cross-platform products and apps for different businesses.'), _react2.default.createElement('p', null, 'React JS makes the code more predictable and easier to debug. It is very important in a long perspective, especially if you are working on a startup.'), _react2.default.createElement('h3', null, 'Hire React JS Developers'), _react2.default.createElement('p', null, 'When searching for a React JS development company, consider Ukraine as a possible outsourcing destination. Ukrainian offshore React JS development companies have plenty strengths:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'Access to an extensive talent pool;'), _react2.default.createElement('li', null, 'Strong educational background;'), _react2.default.createElement('li', null, 'Active tech community;'), _react2.default.createElement('li', null, 'Reasonable, often lower rates;'), _react2.default.createElement('li', null, 'The desire to deliver high-quality products that can compete.')), _react2.default.createElement('p', null, 'On our Keenethics spaceship, you can hire experienced React JS developers for projects of any complexity. Our astronauts can develop landing pages, online stores, corporate websites, E-Commerce solutions and much more.'), _react2.default.createElement('p', null, 'We have the potential to extend your business operations and offer new opportunities by providing high-class React JS development services for balanced prices. Contact us for further information or questions anytime!')))));
};

TechFrontEndReact.defaultProps = {
  url: {}
};

exports.default = TechFrontEndReact;