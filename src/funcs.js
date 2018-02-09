import React, { Component } from 'react';
import PropTypes from "prop-types";
import { filter } from "lodash";
import Failback from './Fallback';

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

      /**
       * Get Visible Context
       */
      getVisibleData() {
        return this.context[contextName] || {};
      }

      render() {
        const children = React.Children.toArray(this.props.children);
        if (this.visible(this.getVisibleData())) {
          return filter(children, c => c.type !== Failback);
        } else {
          return filter(children, c => c.type === Failback) || null
        }
      }

    };

    control.displayName = `${contextName}Control`;

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
