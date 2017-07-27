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

var TechFrontEndNext = function TechFrontEndNext(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, {
    url: url,
    image: 'fe',
    points: _main3.techFrontEnd
  }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'Next.js Development Services'), _react2.default.createElement('p', null, 'To create a powerful web app, a wide range of frontend and backend technologies is being used. The concrete choice depends on a variety of factors, starting from main business goals and ending up with the budget and time limits. Recently, building server-rendered React apps with Next.js is one of our most-requested services.'), _react2.default.createElement('p', null, 'The Next.js framework is a new addition to the React open-source ecosystem. Next is a framework for universal server-rendered React applications that makes the process of building these types of applications much faster, and easier. With Next.js development, it is easier to focus on the business logic, not on the framework itself.'), _react2.default.createElement('p', null, 'For developers, Next framework offers:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'no configuration or additional setup;'), _react2.default.createElement('li', null, 'easy component and global style with Glamor library;'), _react2.default.createElement('li', null, 'automatic transpilation and bundling (with your own Webpack configurations and Babel);'), _react2.default.createElement('li', null, 'hot code reloading;'), _react2.default.createElement('li', null, 'route prefetching.')), _react2.default.createElement('p', null, 'Also, the Next.js framework is able to implement with Express or any other Node.js HTTP server.'), _react2.default.createElement('p', null, 'We suggest to you to contact our astronauts or talk to a Tech Consultant and receive a professional advice on the most efficient stack of technologies for bringing your project.'), _react2.default.createElement('h3', null, 'Hire Next.js Developers'), _react2.default.createElement('p', null, 'One of the most effective and safe ways to keep the software development budget within reason is to outsource a part of the project or the whole project to a software development service provider. Many businesses consider East-European countries like Ukraine to establish long-term cooperation. Good location (2-hour flight from key European capitals), reasonable rates and highly-educated developers make Ukrainian market one of the most prominent in the region.'), _react2.default.createElement('p', null, 'On our Keenethics spaceship, we have experience delivering high-end web apps, sites and other web-based solutions for different industries and business purposes. Our astronauts work with a solid stack of frameworks, including Next.js framework, React, Redux, Vue.js, Aurelia, and others. Therefore, we can complete projects of different complexity.'), _react2.default.createElement('p', null, 'If you are looking forward to hiring a Dedicated Team and build an App using Next.js framework, contact our astronauts.')))));
};

TechFrontEndNext.defaultProps = {
  url: {}
};

exports.default = TechFrontEndNext;