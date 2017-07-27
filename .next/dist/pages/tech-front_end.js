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

var _tabs = require('../components/page/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _main3 = require('../main.config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServicesOutstaffing = function ServicesOutstaffing(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap with-icons' }, _react2.default.createElement(_navigation2.default, { url: url, image: 'fe' }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement(_tabs2.default, {
    points: _main3.techFrontEnd
  }), _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'Front-End'), _react2.default.createElement('p', null, 'Front-end development is a process of the creation site\u2019s client-side. Front-end developer is engaged in site layout template and user interface creation. Typically, front-end developer - is a master of all trades. He must have the design talent, be a high-skilled coder and a good programmer - like all-in-one.'), _react2.default.createElement('p', null, 'The modern front-end developer should easily hold html5 and css3, JavaScript (and at least JQuery), main front end development tools. Each front-end specialist has his own designs, which he keeps in frameworks etc. Many developers work in the popular frameworks, such as TwitterBootstrap, Foundation 3, Compass.'), _react2.default.createElement('p', null, 'Front end developers are experts in their field and usually have many skills from related fields. They have learned about HTML, CSS, usability, design, color theory and more on Javascript. Most likely, in addition, a front-end developer has read a couple of books on the server-side programming languages, which describes the interaction with the server side using Ajax technologies. Front end developers should consider the methods of project development in general: they are in addition to the HTML markup and write Javascript code often have to deal with an even number of technologies.'), _react2.default.createElement('p', null, 'Front end developer deals not only with the specific concepts and tasks in his work, but often with abstract thinking. He is one of those people who can build a bridge between mathematics and art, he actually takes mathematics as an art. Due to the fact that he is able to combine these two disciplines, because of the fact that he could connect the user experience to the processes of logical processing - it is a very valuable asset to the business.'), _react2.default.createElement('p', null, 'In the past, front end developer was the designer who sent a bunch of GIF images to the server developer. Then he placed them on multiple tables, which have created the markup generators. This code was not structurally or semantics.'), _react2.default.createElement('p', null, 'But those days are gone and now front end developer\u2019s tasks changed dramatically, it became more complex and important about the advent of Ajax, HTML5, CSS3, web applications, social networks, mobile devices, and SEO. It\'s too much technology to be able to covered by one person. Businesses should keep pace with emerging trends and expanding technology. And hire the right type of developers to achieve success.')))));
};

ServicesOutstaffing.defaultProps = {
  url: {}
};

exports.default = ServicesOutstaffing;