'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDraggable = require('react-draggable');

var _reactDraggable2 = _interopRequireDefault(_reactDraggable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageTabsElement = function PageTabsElement(_ref) {
  var href = _ref.href,
      name = _ref.name,
      tabsDescription = _ref.tabsDescription,
      icon = _ref.icon;
  return _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: href }, _react2.default.createElement('a', null, _react2.default.createElement('div', { className: 'inner' }, tabsDescription ? _react2.default.createElement('div', { className: 'ico' }, _react2.default.createElement('div', { className: 'tbl' }, _react2.default.createElement('div', { className: 'cell' }, _react2.default.createElement('img', { width: '53', src: '/static/images/svg/' + icon + '.svg', alt: '' })))) : _react2.default.createElement('div', { className: 'tbl' }, _react2.default.createElement('div', { className: 'cell' }, _react2.default.createElement('img', { width: '53', src: '/static/images/svg/' + icon + '.svg', alt: '' }))), !tabsDescription || _react2.default.createElement('span', null, _react2.default.createElement('span', { className: 'ttl' }, name), _react2.default.createElement('span', { className: 'ttl-s' }, tabsDescription))), !tabsDescription ? _react2.default.createElement('div', { className: 'icon-name' }, name) : null)));
};

PageTabsElement.defaultProps = {
  href: '',
  name: '',
  tabsDescription: '',
  icon: ''
};

var PageTabs = function PageTabs(_ref2) {
  var points = _ref2.points,
      withDescription = _ref2.withDescription;
  return _react2.default.createElement('div', { className: 'icon-wrap' }, _react2.default.createElement(_reactDraggable2.default, {
    axis: 'x',
    defaultPosition: { x: 0, y: 0 },
    position: null
  }, _react2.default.createElement('ul', { className: withDescription ? 'icon-row icon-d-row' : 'icon-row' }, points.map(function (element) {
    return _react2.default.createElement(PageTabsElement, {
      key: element.name,
      href: element.href,
      name: element.name,
      tabsDescription: element.tabsDescription || '',
      icon: element.icon
    });
  }))));
};

PageTabs.defaultProps = {
  points: [],
  withDescription: false
};

exports.default = PageTabs;