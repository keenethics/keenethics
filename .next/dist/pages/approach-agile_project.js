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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ApproachAgileProject = function ApproachAgileProject(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, { url: url, image: 'agile' }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'Agile Project Management Services'), _react2.default.createElement('p', null, 'Today, agile is one of the most trendy and widely used terms in project management, so we are pretty sure that you must have heard it. So what is agile and agile project and service management? What does it mean to be agile?'), _react2.default.createElement('p', null, 'Agile is not a methodology, neither a tool or a guideline. Agile rather shows company\'s approach and its values. The Agile Manifesto is brilliantly short:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'Individuals and interactions over processes and tools;'), _react2.default.createElement('li', null, 'Working software over comprehensive documentation;'), _react2.default.createElement('li', null, 'Customer collaboration over contract negotiation;'), _react2.default.createElement('li', null, 'Responding to change over following a plan.')), _react2.default.createElement('p', null, 'Each of the agile project management companies believes and follows these simple values and principles. Of course, Keenethics is one of these companies.'), _react2.default.createElement('h3', null, 'Agile project management advisory service'), _react2.default.createElement('p', null, 'Working with a company offering agile project business services pty ltd gives you important and meaningful benefits. An agile team will focus on your business goals, striving to deliver the best custom product. On the Keenethics spaceship, astronauts are always ready for changes, so if you decide to implement some small features or remove the old ones, we will see how we can satisfy such a need without the unnecessary fuss and paperwork.'), _react2.default.createElement('p', null, 'Implementing Scrum, the most popular Agile methodology helps us to stay flexible and deliver projects on time. Scrum gives you more control over the process and makes the software development transparent and opened. Here you decide what is the most important for you and your users.'), _react2.default.createElement('p', null, 'As an agile-oriented company, we offer agile project management services to every client. We believe it is the best way to organize the software development process, make it clear and effective. Also, on our spaceship, you can receive agile project management advisory service to make your project go faster.'), _react2.default.createElement('p', null, 'If you need more information, you can find agile project and service management pdf or visit official websites like Agile Alliance.'), _react2.default.createElement('p', null, 'Feel free to contact us if you have any questions left!')))));
};

ApproachAgileProject.defaultProps = {
  url: {}
};

exports.default = ApproachAgileProject;