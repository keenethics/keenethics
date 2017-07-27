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

var ServicesOutstaffingTechnical = function ServicesOutstaffingTechnical(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, {
    url: url,
    image: 'outstaffing_tc',
    points: _main3.servicesOutstaffing
  }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'Technical consultancy'), _react2.default.createElement('p', null, 'There can be a lot of reasons for companies to hire Technical Consultants. If you faced a challenging project, have a specific business goal or want to build a startup, and your in-house staff does not have enough expertise to deliver it, in 95% you will need to look for professionals in the required field.'), _react2.default.createElement('p', null, 'So who is a technical advisor and how he can help you? A technical consultant is a person who is an expert in a particular field of knowledge. He is hired to provide detailed information and advice to people working in that field.'), _react2.default.createElement('p', null, 'How and when to use technical consultants? In short, companies hire a consultant for 1) expertise, 2) objectivity, 3) credibility, 4) leadership, and 5) time. The key reason for hiring IT consultants is to provide a needed skill, that in many cases the company does not wish to permanently acquire.'), _react2.default.createElement('p', null, 'On our opinion, hiring an IT Consultant is an efficient solution, if you want to implement a new system, replace an existing one, customize software and so on. For instance, our astronaut will help you think through your options, facilitate implementation, and work with your team to make sure everyone is up and running with your new technology solution.'), _react2.default.createElement('h3', null, 'Hire IT Consultants'), _react2.default.createElement('p', null, 'For a lot of businesses, especially small and middle-sized, choosing tech consultants on the local market can bring no results, there may be no skilled enough professionals, their rates overcome your budget and etc. Therefore, outsourcing development, support and/or consulting to contractors often becomes a question of cost-effectiveness.'), _react2.default.createElement('p', null, 'Another reason why companies outsource IT Consulting is that they want to receive a fresh look on their current or future project and find if there are any weak points. Also, this type of consultancy is a must, when you are going to launch a product or a service on a new market.'), _react2.default.createElement('p', null, 'On the Keenethics spaceship, we can provide technical consultancy services in areas of:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'E-commerce;'), _react2.default.createElement('li', null, 'Web Development;'), _react2.default.createElement('li', null, 'Building Chatbots;'), _react2.default.createElement('li', null, 'Hybrid and Progressive App Development;'), _react2.default.createElement('li', null, 'Mobile Development and other services.')), _react2.default.createElement('p', null, 'Our astronauts have strong experience using a lot of tools and technologies for the Front End (React.js, Redux.js, Angular.js and so on), Back End (Express.js, Meteor.js and other frameworks), Databases (MongoDB, MySQL, Postgres), and building powerful Apps (Cordova, Phonegap, Electron).'), _react2.default.createElement('p', null, 'You can select any of our areas of expertise listed above and hire a skilled Technical Advisor to give you or your team a hand or contact us if you have questions left.')))));
};

ServicesOutstaffingTechnical.defaultProps = {
  url: {}
};

exports.default = ServicesOutstaffingTechnical;