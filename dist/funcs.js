"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createContext = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * CreateContext
 *
 * @param {string} contextName the context name
 */
var createContext = exports.createContext = function createContext(contextName) {

  /**
   * @augments {Component<{data:([]|object)}>}
   */
  var context = function (_Component) {
    _inherits(context, _Component);

    function context() {
      _classCallCheck(this, context);

      return _possibleConstructorReturn(this, (context.__proto__ || Object.getPrototypeOf(context)).apply(this, arguments));
    }

    _createClass(context, [{
      key: "getChildContext",
      value: function getChildContext() {
        var obj = {};

        obj[contextName] = this.props.data;

        return obj;
      }
    }, {
      key: "render",
      value: function render() {
        return this.props.children;
      }
    }]);

    return context;
  }(_react.Component);

  context.displayName = "" + contextName;

  context.propTypes = {
    "children": _propTypes2.default.any,
    "data": _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array])
  };

  var childContextTypes = {};

  childContextTypes[contextName] = _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]);

  context.childContextTypes = childContextTypes;

  /**
   * @param {function(object):boolean} visibleFunc
   */
  var createControl = function createControl(visibleFunc) {

    /**
     * @augments {Component<{visibleKey:string},{}>}
     */
    var control = function (_Component2) {
      _inherits(control, _Component2);

      function control(props) {
        _classCallCheck(this, control);

        var _this2 = _possibleConstructorReturn(this, (control.__proto__ || Object.getPrototypeOf(control)).call(this, props));

        _this2.visible = visibleFunc || function (data) {
          return Boolean(data[_this2.props.visibleKey]);
        };
        return _this2;
      }

      _createClass(control, [{
        key: "getVisibleData",
        value: function getVisibleData() {
          return this.context[contextName] || {};
        }
      }, {
        key: "render",
        value: function render() {
          if (this.visible(this.getVisibleData())) {
            return this.props.children;
          }

          return null;
        }
      }]);

      return control;
    }(_react.Component);

    control.displayName = contextName + "VisibleControl";

    control.propTypes = {
      "children": _propTypes2.default.any,
      "visibleKey": _propTypes2.default.string
    };

    var contextTypes = {};

    contextTypes[contextName] = _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]);

    control.contextTypes = contextTypes;

    return control;
  };

  var control = createControl();

  return {
    context: context,
    control: control,
    createControl: createControl
  };
};

exports.default = { createContext: createContext };