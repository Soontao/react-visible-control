import { Component } from 'react';
import PropTypes from "prop-types";


/**
 * CreateContext
 *
 * @param {string} contextName the context name
 */
export const createContext = (contextName) => {

  /**
   * @augments {Component<{data:([]|object)}>}
   */
  const context = class extends Component {

    getChildContext() {
      const obj = {};

      obj[contextName] = this.props.data;

      return obj;
    }

    render() {
      return this.props.children;
    }

  };

  context.displayName = `${contextName}`;

  context.propTypes = {
    "children": PropTypes.any,
    "data": PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ])
  };

  const childContextTypes = {};

  childContextTypes[contextName] = PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]);

  context.childContextTypes = childContextTypes;

  /**
   * @param {function(object):boolean} visibleFunc
   */
  const createControl = (visibleFunc) => {

    /**
     * @augments {Component<{visibleKey:string},{}>}
     */
    const control = class extends Component {

      constructor(props) {
        super(props);
        this.visible = visibleFunc || ((data) => Boolean(data[this.props.visibleKey]));
      }

      getVisibleData() {
        return this.context[contextName] || {};
      }

      render() {
        if (this.visible(this.getVisibleData())) {
          return this.props.children;
        }

        return null;
      }

    };

    control.displayName = `${contextName}VisibleControl`;

    control.propTypes = {
      "children": PropTypes.any,
      "visibleKey": PropTypes.string
    };

    const contextTypes = {};

    contextTypes[contextName] = PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]);

    control.contextTypes = contextTypes;

    return control;
  };

  const control = createControl();

  return {
    context,
    control,
    createControl
  };
};


export default { createContext };
