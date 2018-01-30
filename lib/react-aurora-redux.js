(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('immutability-helper')) :
	typeof define === 'function' && define.amd ? define(['exports', 'immutability-helper'], factory) :
	(factory((global.AuroraRedux = {}),global.update));
}(this, (function (exports,update) { 'use strict';

update = update && update.hasOwnProperty('default') ? update['default'] : update;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const domain = '@@Aurora';

const initialState = {
  elements: []
};

const actionTypes = {
  SHOW_ELEMENT: `${domain}/SHOW_ELEMENT`,
  HIDE_ELEMENT: `${domain}/HIDE_ELEMENT`
};

const actions = {
  showElement: element => ({ type: actionTypes.SHOW_ELEMENT, element }),
  hideElement: ids => ({
    type: actionTypes.HIDE_ELEMENT,
    ids: Array.isArray(ids) ? ids : [ids]
  })
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SHOW_ELEMENT:
      {
        let index = state.elements.findIndex(e => e.id === action.element.id);
        if (index === -1) {
          index = state.elements.length;
        }
        return update(state, { elements: { [index]: { $set: action.element } } });
      }

    case actionTypes.HIDE_ELEMENT:
      {
        return _extends({}, state, {
          elements: state.elements.filter(e => !action.ids.includes(e.id))
        });
      }
  }
  return state;
}

const selectors = {
  elements: state => state.elements
};

exports.domain = domain;
exports.actionTypes = actionTypes;
exports.actions = actions;
exports.reducer = reducer;
exports.selectors = selectors;

Object.defineProperty(exports, '__esModule', { value: true });

})));
