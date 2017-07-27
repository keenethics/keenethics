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

var TechDataBaseMongo = function TechDataBaseMongo(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, {
    url: url,
    image: 'be',
    points: _main3.techDatabase
  }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'Mongo DB Developers'), _react2.default.createElement('p', null, 'MongoDB is a free and open-source cross-platform document-oriented database program, developed by MongoDB Inc. Today, MongoDB is the leading NoSQL database.'), _react2.default.createElement('p', null, 'When do you need to hire a MongoDB Development Team? Here are a few examples:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'you expect a High Write Load;'), _react2.default.createElement('li', null, 'you need High Availability in an Unreliable Environment (Cloud and Real Life);'), _react2.default.createElement('li', null, 'you need to Grow Big (and Shard your data);'), _react2.default.createElement('li', null, 'data is Location Based;'), _react2.default.createElement('li', null, 'data set is going to be big (starting from 1GB) and schema is not stable;'), _react2.default.createElement('li', null, 'you do not have a DBA.')), _react2.default.createElement('p', null, 'MongoDB can run over multiple servers, balancing the load or duplicating data to keep the system up and running in case of hardware failure. If you have big data (billions of records) and a large number of parallel updates MongoDB will suit your project.'), _react2.default.createElement('p', null, 'What it is possible to do with Mongo Database:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'Single View;'), _react2.default.createElement('li', null, 'Internet of Things (IoT);'), _react2.default.createElement('li', null, 'Mobile;'), _react2.default.createElement('li', null, 'Real-Time Analytics;'), _react2.default.createElement('li', null, 'Personalization;'), _react2.default.createElement('li', null, 'Catalog;'), _react2.default.createElement('li', null, 'Content Management.')), _react2.default.createElement('p', null, 'Many organizations, from startups to the largest companies and government agencies, choose MongoDB Development for bringing their databases to life. With MongoDB, these organizations move faster than they could with relational databases at one-tenth of the cost.'), _react2.default.createElement('p', null, 'With the help of MongoDB, astronauts on the Keenethics spaceship can create and deploy a highly scalable and performance-oriented database.'), _react2.default.createElement('h3', null, 'Hire Mongo DB Developers'), _react2.default.createElement('p', null, 'Hiring Top MongoDB Developers can extremely improve the quality of your product and the way it works. Hiring Freelance MongoDB Developers has a few benefits, but we suggest you consider offshore IT service providers that have management teams on board. The management team will help you to avoid the everyday rush and day-to-day operations.'), _react2.default.createElement('p', null, 'You can set up a Dedicated Development Team, that will join your team and work only on your project or a part of it. On our spaceship, you can set up a full-cycle development or you can choose only a MongoDB Development service.'), _react2.default.createElement('p', null, 'When looking for Mongodb developers for hire pay attention to a few aspects. Skilled developers must have read Mongodb documentation and have experience working with the other required software, tools and technologies.'), _react2.default.createElement('p', null, 'Please accept our congratulations, if you have found MongoDB Certified Professionals \u2013 individuals with proven MongoDB expertise. MongoDB certifications recognize developers and DBAs with the knowledge needed to build and maintain MongoDB applications.'), _react2.default.createElement('p', null, 'Our astronauts have experience delivering high-load MongoDB projects for various business needs. Contact us and we will share our best practices!')))));
};

TechDataBaseMongo.defaultProps = {
  url: {}
};

exports.default = TechDataBaseMongo;