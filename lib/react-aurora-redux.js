(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('immutable')) :
	typeof define === 'function' && define.amd ? define(['exports', 'immutable'], factory) :
	(factory((global.AuroraRedux = {}),global.immutable));
}(this, (function (exports,immutable) { 'use strict';

const domain = '@@Aurora';

const initialState = immutable.fromJS({
  elements: []
});

const actionTypes = {
  ADD_ELEMENT: `${domain}/ADD_ELEMENT`,
  REMOVE_ELEMENT: `${domain}/REMOVE_ELEMENT`
};

const actions = {
  addElement: element => {
    actionTypes.ADD_ELEMENT, element;
  },
  removeElement: id => {
    actionTypes.REMOVE_ELEMENT, id;
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_ELEMENT:
      {
        let index = state.get('elements').findIndex(e => e.get('id') === action.element.get('id'));
        if (index === -1) {
          index = state.get('elements').size;
        }
        return state.setIn(['elements', index], action.element);
      }

    case actionTypes.REMOVE_ELEMENT:
      return state.set('elements', state.get('elements').filter(e => e.get('id') === action.id));
  }
  return state;
}

const selectors = {
  elements: state => state.get('elements', immutable.List())
};

exports.domain = domain;
exports.actionTypes = actionTypes;
exports.actions = actions;
exports.reducer = reducer;
exports.selectors = selectors;

Object.defineProperty(exports, '__esModule', { value: true });

})));
