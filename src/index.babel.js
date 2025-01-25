import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Views/Home.js";
import { About } from "./Views/About.js";
import { Photos } from "./Views/Photos.js";
import { Menus } from "./Views/Menus.js";
import { Contact } from "./Views/Contact.js";
const root = createRoot(window.bodyTag);
root.render(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
  path: "/",
  element: /*#__PURE__*/React.createElement(Home, null)
}), /*#__PURE__*/React.createElement(Route, {
  path: "/Level-3-Capstone-Project",
  element: /*#__PURE__*/React.createElement(Home, null)
}), /*#__PURE__*/React.createElement(Route, {
  path: "/about",
  element: /*#__PURE__*/React.createElement(About, null)
}), /*#__PURE__*/React.createElement(Route, {
  path: "/photos",
  element: /*#__PURE__*/React.createElement(Photos, null)
}), /*#__PURE__*/React.createElement(Route, {
  path: "/menus",
  element: /*#__PURE__*/React.createElement(Menus, null)
}), /*#__PURE__*/React.createElement(Route, {
  path: "/contact",
  element: /*#__PURE__*/React.createElement(Contact, null)
})))));
