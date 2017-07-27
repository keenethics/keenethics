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

var ApproachHighPerformance = function ApproachHighPerformance(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_main2.default, { currentURL: url }, _react2.default.createElement('div', { className: 'content-wrap' }, _react2.default.createElement(_navigation2.default, { url: url, image: 'high' }), _react2.default.createElement('div', { className: 'content-block content-block-f' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('div', { className: 'perfomance-wrap' }, _react2.default.createElement('div', { className: 'line' }), _react2.default.createElement('div', { className: 'perfomance-block' }, _react2.default.createElement('div', { className: 'perfomance-item' }, _react2.default.createElement('div', { className: 'point' }), _react2.default.createElement('div', { className: 'perfomance-column right' }, _react2.default.createElement('div', { className: 'perfomance-image' }, _react2.default.createElement('img', { src: '/static/images/p-img-01.jpg', alt: '' }), _react2.default.createElement('span', null, _react2.default.createElement('i', null, 'STANDING TABLE KIT')))), _react2.default.createElement('div', { className: 'perfomance-column left' }, _react2.default.createElement('div', { className: 'perfomance-text' }, _react2.default.createElement('span', null, 'These tables help our workers not to get tires during the coding adventures')))), _react2.default.createElement('div', { className: 'perfomance-item' }, _react2.default.createElement('div', { className: 'point' }), _react2.default.createElement('div', { className: 'perfomance-column left' }, _react2.default.createElement('div', { className: 'perfomance-image' }, _react2.default.createElement('img', { src: '/static/images/p-img-02.jpg', alt: '' }), _react2.default.createElement('span', null, _react2.default.createElement('i', null, 'POWERFUL COMPUTERS')))), _react2.default.createElement('div', { className: 'perfomance-column right' }, _react2.default.createElement('div', { className: 'perfomance-text' }, _react2.default.createElement('span', null, 'Wild machines and huge displays to make the proccess of creating Your product even more pleasant')))), _react2.default.createElement('div', { className: 'perfomance-item' }, _react2.default.createElement('div', { className: 'point' }), _react2.default.createElement('div', { className: 'perfomance-column right' }, _react2.default.createElement('div', { className: 'perfomance-image' }, _react2.default.createElement('img', { src: '/static/images/p-img-03.jpg', alt: '' }), _react2.default.createElement('span', null, _react2.default.createElement('i', null, 'RESULTS-COUPLING')))), _react2.default.createElement('div', { className: 'perfomance-column left' }, _react2.default.createElement('div', { className: 'perfomance-text' }, _react2.default.createElement('span', null, 'We don\u2019t abandon our projects after finishing them. We\u2019re supporting it and helping to fix the issues if some occur')))), _react2.default.createElement('div', { className: 'perfomance-item' }, _react2.default.createElement('div', { className: 'point' }), _react2.default.createElement('div', { className: 'perfomance-column left' }, _react2.default.createElement('div', { className: 'perfomance-image' }, _react2.default.createElement('img', { src: '/static/images/p-img-04.jpg', alt: '' }), _react2.default.createElement('span', null, _react2.default.createElement('i', null, 'HEALTHYNESS')))), _react2.default.createElement('div', { className: 'perfomance-column right' }, _react2.default.createElement('div', { className: 'perfomance-text' }, _react2.default.createElement('span', null, 'We exercise, have fruits instead of cookies and tables that let you work standing up which helps to increase our productivity'))))))))));
};

ApproachHighPerformance.defaultProps = {
  url: {}
};

exports.default = ApproachHighPerformance;