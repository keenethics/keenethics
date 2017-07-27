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

var TechFrontEndVue = function TechFrontEndVue(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, {
    url: url,
    image: 'fe',
    points: _main3.techFrontEnd
  }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'Vue.js development services'), _react2.default.createElement('p', null, 'There are plenty of technologies used to build a strong frontend part of the project. What is and when to use Vue.js on the project? Vue.js is a progressive JavaScript framework for building user interfaces. Since Vue.js is an open-source framework, there is no need to buy any license, you and your development team are free to use it as you wish.'), _react2.default.createElement('p', null, 'With Vue framework, we can build all kinds of advanced single-page web apps and complex mobile apps, including multi-device hybrid (Cordova or Phonegap) apps and Native apps. Our Vue.js. developers have access to a rapidly-growing Vue.js community. Also, they are free to use supporting libraries and plugins.'), _react2.default.createElement('p', null, 'The Vue.js framework has a lot of strengths:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'Approachable. Developer knowing HTML, CSS and JavaScript can deliver and support Vue.js apps. This fact means you will have no problems hiring more stuff.'), _react2.default.createElement('li', null, 'Versatile. Simple, minimal core with an adoptable stack that can handle Vue.js apps of any scale.'), _react2.default.createElement('li', null, 'Performant (in many cases, faster than React) and flexible. Vue.js developers can easily integrate with other libraries or existing projects.')), _react2.default.createElement('p', null, 'Today, the Vue.js framework is being used by giants like Alibaba, Baidu & Tencent, Xiaomi, and some others. We suggest to you to contact our astronauts and find out which stack of technologies will suit your project.'), _react2.default.createElement('h3', null, 'Hire Vue.js developers'), _react2.default.createElement('p', null, 'To cut the Vue.js development budget companies often hire an offshore dedicated development team or a few freelance developers. Building the communication process with an existing development team usually is faster and easier to manage.'), _react2.default.createElement('p', null, 'The list of frontend technologies used by a company does not only demonstrate company`s expertise but also shows you your opportunities. For example, our astronauts are good at using Angular, Angular 2, React, Redux, and more. If you want to keep your project up-to-date, hire a company, that masters cutting-edge technologies like Vue.js framework and can offer different solutions.'), _react2.default.createElement('p', null, 'On our Keenethics spaceship, we have experience providing Vue.js development services for businesses all around the globe. It would be great if you contact our astronauts and tell us more about your project!')))));
};

TechFrontEndVue.defaultProps = {
  url: {}
};

exports.default = TechFrontEndVue;