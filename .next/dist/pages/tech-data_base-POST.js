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

var TechDataBasePostgresql = function TechDataBasePostgresql(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, {
    url: url,
    image: 'be',
    points: _main3.techDatabase
  }), _react2.default.createElement('div', { className: 'content-block' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h2', null, 'PostgreSQL Development'), _react2.default.createElement('p', null, 'Let\u2019s start from what is PostgreSQL and what are its main benefits. Shortly, PostgreSQL is a powerful, open source object-relational database system with more than 15 years of active development.'), _react2.default.createElement('p', null, 'PostgreSQL\u2019s source code is available under an open source license. This license gives the freedom to use, modify and distribute PostgreSQL in any form.'), _react2.default.createElement('p', null, 'One of the key pros of PostgreSQL is that it is highly customizable. PostgreSQL runs stored procedures in more than a dozen programming languages, including Java, Node.js, Perl, Python, Ruby, C/C++, and its own PL/pgSQL, which is similar to Oracle\u2019s PL/SQL. PostgreSQL database developers can run it on all major operating systems, including Linux, UNIX, and Windows.'), _react2.default.createElement('p', null, 'There is a long list of other PostgreSQL benefits for your project:'), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, 'Significant saving on staffing costs. PostgreSQL has been designed and created to have much lower maintenance and tuning requirements, yet still retain all of the features, stability, and performance.'), _react2.default.createElement('li', null, 'Reliability and stability. It is extremely common for companies to report that PostgreSQL has never, ever crashed in several years of high activity operation.'), _react2.default.createElement('li', null, 'Extensible. The source code is available to all at no charge. If we need to customise or extend PostgreSQL in any way, we are able to do so with a minimum of effort, and with no attached costs. This is complemented by the community of PostgreSQL professionals and enthusiasts around the globe that also actively extend PostgreSQL on a daily basis.'), _react2.default.createElement('li', null, 'Designed for high volume environments. PostgreSQL is extremely responsive in high volume environments.'), _react2.default.createElement('li', null, 'GUI database design and administration tools. There are many high-quality GUI Tools available for PostgreSQL development from both open source developers and commercial providers.')), _react2.default.createElement('p', null, 'PostgreSQL has a proven architecture that has earned it a strong reputation for reliability, data integrity, and correctness. You should definitely choose PostgreSQL vs. MySQL for potentially scalable, fast-growing projects. But PostgreSQL is not only a powerful database system capable of running enterprise projects, it is a development platform to build web and software products as well.'), _react2.default.createElement('h3', null, 'PostgreSQL Database Developers'), _react2.default.createElement('p', null, 'If you want to hire PostgreSQL developers and keep you budget cost-efficient, consider offshore software development service providers. Reasonable rates, huge talent pool, and favourable business climate make Ukraine one of the best destinations for outsourcing PostgreSQL services to.'), _react2.default.createElement('p', null, 'When choosing a PostgreSQL service vendor in Ukraine, take into account several factors: what company\u2019s portfolio says about expertise in various domains and technology areas, long-term partnerships with customers, available engagement models, does the company follow Agile Methodologies, etc. Check if the company has experience in other database systems, for example, MySQL.'), _react2.default.createElement('p', null, 'Contact our astronauts to get a technical advice and a professional estimate on your project.')))));
};

TechDataBasePostgresql.defaultProps = {
  url: {}
};

exports.default = TechDataBasePostgresql;