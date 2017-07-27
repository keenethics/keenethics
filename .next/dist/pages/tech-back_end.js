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

var TechBackEnd = function TechBackEnd(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap with-icons' }, _react2.default.createElement(_navigation2.default, { url: url, image: 'be' }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement(_tabs2.default, {
    points: _main3.techBackEnd
  }), _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'Back-End'), _react2.default.createElement('p', null, 'Backend development - is the process of programming the site and filling it with functional. Creating a core site, site development platform, filling it with basic functionality and creation of the administrative area - this is the backend development.'), _react2.default.createElement('p', null, 'Website backend development process is a web programming, the purpose of which is to implement server-side of site, integrate database connect it with user`s (front-end) side. Backend development also includes software setup on a server.'), _react2.default.createElement('p', null, 'The frontend sends information and commands from the user to the website backend, and that in turn makes their processing. In short, front-end is created for the users and back-end for admins.'), _react2.default.createElement('p', null, 'Backend developer must have a basic programming skills. It`s a coding systems and languages for every field of development. Java and C# are, maybe, the most popular programming languages for now. But who knows, times change, web and app development grows, Ruby, Javascript and Python catching up.'), _react2.default.createElement('p', null, 'Backend development requires a database skill. A majority of e-commerce websites have databases, so this expertise is also basic for backend developers.'), _react2.default.createElement('p', null, 'It`s not so easy to code. It`s even more harder to code good stuff. A good coder must know backend development tools. It says that good backend coder makes a complex from development tools and \u201Chand-made code\u201D. Besides, we do believe that high-skilled backend developer must know both frontend and backend tools.')))));
};

TechBackEnd.defaultProps = {
  url: {}
};

exports.default = TechBackEnd;