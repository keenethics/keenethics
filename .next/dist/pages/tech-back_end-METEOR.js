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

var TechBackEndMeteor = function TechBackEndMeteor(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, {
    url: url,
    image: 'be',
    points: _main3.techBackEnd
  }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'Meteor.JS Development'), _react2.default.createElement('p', null, 'Some of our clients are interested in the development processes and they want to know what is happening behind the scenes of their apps. One of the questions is what is Meteor js and why do we use it?'), _react2.default.createElement('p', null, 'In a few words, Meteor is a technology that helps developers to build JavaScript cross-platform applications faster without the lack of quality. Meteor can be used for web, mobile, and desktop projects of different complexity.'), _react2.default.createElement('p', null, 'We would like to notice that Meteor is an open source platform, so you will not have to spend additional resources on the development software and tools.'), _react2.default.createElement('h3', null, 'Back-end Web Development'), _react2.default.createElement('p', null, 'So what is Meteor and what are the benefits of using it in the development? Our astronauts chose Meteor as one of the most popular and often used technologies that help to optimize the back end development process. In the terms of business, it means that we can build a product faster with less code.'), _react2.default.createElement('p', null, 'Also, the Meteor js review shows that Meteor easily integrates with Angular, React, Mongo DB, Cordova ant other technologies and services. In our portfolio, there is react Meteor example so you can see how it works. Also, we have a Meteor react todos integration example.'), _react2.default.createElement('p', null, 'For launching your first Meteor application we suggest hiring an experienced team of developers. Since Meteor is a full-stack platform with its help you can implement changes in the front end, back end and databases.'), _react2.default.createElement('p', null, 'Hiring developers without any experience but with lower rates looks more beneficial at first. But keep in mind that in the end the development process can take more time, therefore, the final price can be the same. Or, even worse, you can receive an app with bad architecture and code that is hard to support.'), _react2.default.createElement('p', null, 'Our Meteor JS astronauts have all skills and knowledge to build a high-quality app. On the Keenethics spaceship, we have Meteor js examples used in a variety of projects. If you still are not sure if your project requires such type of technology feel free to contact us.')))));
};

TechBackEndMeteor.defaultProps = {
  url: {}
};

exports.default = TechBackEndMeteor;