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

var TechFrontEndAngular = function TechFrontEndAngular(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, {
    url: url,
    image: 'fe',
    points: _main3.techFrontEnd
  }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'AngularJS Developers'), _react2.default.createElement('p', null, 'AngularJS in a JavaScript-based open-source framework. But what is angularjs good for and where is its place in the list of technologies? Developers pick angularjs development for building front-end web, mobile web, native mobile and native desktop applications.'), _react2.default.createElement('p', null, 'Angular JS not only helps to increase apps speed and performance but also, gives control over scalability and helps to meet huge data requirements.'), _react2.default.createElement('p', null, 'As an angularjs development environment can be used integrated development environments for JavaScript. Thanks to this, engineers are free to chose their favorite one for angular development process.'), _react2.default.createElement('p', null, 'With the help of angularjs development tools the required work can be done better and slightly faster. Many templates, libraries and a wide range of components give the developer an opportunity to avoid distraction and concentrate on the process.'), _react2.default.createElement('h3', null, 'Hire AngularJS Developers'), _react2.default.createElement('p', null, 'We believe that establishing effective communication is important for business relationship. It is especially important for those who decide to outsource development. Hiring an offshore angularjs development company is a beneficial choice. This decision will help you save money without additional risks. All you need to do is to hire an experienced team of professionals. When picking your partner from the list of angularjs development companies pay attention to company\'s related experience and, if it\u2019s possible, look for some feedbacks.'), _react2.default.createElement('p', null, 'On the Kennethics spaceship we have completed dozens of projects, from small 2-week projects to more complex applications. Some of them contain efficient angularjs examples and reflect our experience. Also, we can give you an angularjs web service example we have developed for our clients.'), _react2.default.createElement('p', null, 'Notice, that we strongly recommend to our clients to start new projects on Angular2, the updated and more powerful version of Angular. Angular still can be used to support old projects. But on our opinion, if the project is successful, it is reasonable to move it to Angular2.'), _react2.default.createElement('p', null, 'Our astronauts use only official and realized angularjs tools and avoid suspicious software. In the end, you will receive a high-quality application, build exactly to meet your business expectations. Contact us anytime if you want to get more information.')))));
};

TechFrontEndAngular.defaultProps = {
  url: {}
};

exports.default = TechFrontEndAngular;