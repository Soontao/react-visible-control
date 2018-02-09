"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Failback = exports.createContext = exports.createVisibleControl = exports.VisibleControl = exports.VisibleContext = undefined;

var _funcs = require("./funcs");

var _Fallback = require("./Fallback");

var _Fallback2 = _interopRequireDefault(_Fallback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createContext = (0, _funcs.createContext)("VisibleContext"),
    context = _createContext.context,
    control = _createContext.control,
    createControl = _createContext.createControl;

exports.VisibleContext = context;
exports.VisibleControl = control;
exports.createVisibleControl = createControl;
exports.createContext = _funcs.createContext;
exports.Failback = _Fallback2.default;
exports.default = {
  "VisibleContext": context,
  "VisibleControl": control,
  "CreateVisibleControl": createControl,
  createContext: _funcs.createContext,
  Failback: _Fallback2.default
};
//# sourceMappingURL=index.js.map