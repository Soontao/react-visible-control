"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createContext = exports.createVisibleControl = exports.VisibleControl = exports.VisibleContext = undefined;

var _funcs = require("./funcs");

var _createContext = (0, _funcs.createContext)("VisibleContext"),
    context = _createContext.context,
    control = _createContext.control,
    createControl = _createContext.createControl;

exports.VisibleContext = context;
exports.VisibleControl = control;
exports.createVisibleControl = createControl;
exports.createContext = _funcs.createContext;
exports.default = {
  "VisibleContext": context,
  "VisibleControl": control,
  "CreateVisibleControl": createControl,
  createContext: _funcs.createContext
};