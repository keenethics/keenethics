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

var TechApiIntegrationGraphql = function TechApiIntegrationGraphql(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, {
    url: url,
    image: 'be',
    points: _main3.techApiIntegration
  }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'GraphQL Development'), _react2.default.createElement('p', null, 'In short, what is GraphQL and how this technology can make your app greater?'), _react2.default.createElement('p', null, 'GraphQL is a query language for your API which lets developers describe the complex, nested data dependencies of modern applications. GraphQL is designed to operate over a single endpoint via HTTP, optimizing for performance and flexibility.'), _react2.default.createElement('p', null, 'Skilled GraphQL developers can use it with any language or platform to define app\u2019s backend as a well-defined schema.'), _react2.default.createElement('p', null, 'GraphQL provides a complete and understandable description of the data in an API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.'), _react2.default.createElement('p', null, 'GraphQL queries access not just the properties of one resource but also smoothly follow references between them. While typical REST APIs require loading from multiple URLs, GraphQL APIs get all the data your app needs in a single request.'), _react2.default.createElement('p', null, 'Long story short, the key benefits of GraphQL app development are:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'Apps can use types to avoid writing manual parsing code;'), _react2.default.createElement('li', null, 'Apps using GraphQL are fast and stable because they control the data they get, not the server.'), _react2.default.createElement('li', null, 'Apps using GraphQL can be quick even on slow mobile network connections.')), _react2.default.createElement('p', null, 'Our GraphQL developers can grow your app from a small project all the way to something big. An amazing scalability is one of the main reasons why companies prefer GraphQL. Of course, everything depends on your projects. Here we suggest to you to contact our astronauts to receive a free tech advice about GraphQL, REST and other technologies.'), _react2.default.createElement('p', null, 'Who is using GraphQL? GraphQL is used by teams of all sizes in many different environments and languages to power mobile apps, websites, and APIs. Facebook\'s mobile apps have been powered by GraphQL since 2012. In the list of companies using GraphQL development you will find such giants as GitHub, Airbnb, Pinterest, Coursera, Meteor, Shopify, Mixcloud, M1 Finance, Intuit and others.'), _react2.default.createElement('h3', null, 'GraphQL Developers'), _react2.default.createElement('p', null, 'Hiring an offshore software service provider will make your project cost-efficient without any quality losses. Hiring offshore GraphQL developers in Ukraine provides businesses with tangible benefits such as an access to ample resources and enhanced flexibility. Consider hiring developers who have solid understanding and experience in GraphQL development and relevant projects in their portfolio. We have used GraphQL in a variety of projects for different industries and business needs. Some of them were build with GraphQL and Node.js, GraphQL and Meteor and other technologies.'), _react2.default.createElement('p', null, 'Just contact our GraphQL developers and get a project estimate in no time.')))));
};

TechApiIntegrationGraphql.defaultProps = {
  url: {}
};

exports.default = TechApiIntegrationGraphql;