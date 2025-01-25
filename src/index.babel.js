"use strict";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDomClient = require("react-dom/client");

var _reactRouter = require("react-router");

var root = (0, _reactDomClient.createRoot)(window.bodyTag);
root.render( /*#__PURE__*/_react2["default"].createElement(_reactRouter.BrowserRouter, null, /*#__PURE__*/_react2["default"].createElement(_reactRouter.Routes, null, /*#__PURE__*/_react2["default"].createElement(_reactRouter.Route, {
  path: "/",
  element: /*#__PURE__*/_react2["default"].createElement(Home, null)
}), /*#__PURE__*/_react2["default"].createElement(_reactRouter.Route, {
  path: "/contact",
  element: /*#__PURE__*/_react2["default"].createElement(Contact, null)
}), /*#__PURE__*/_react2["default"].createElement(_reactRouter.Route, {
  path: "/about",
  element: /*#__PURE__*/_react2["default"].createElement(About, null)
}))));
