import update from 'immutability-helper';

export const domain = '@@Aurora';

const initialState = {
  elements: [],
};

export const actionTypes = {
  SHOW_ELEMENT: `${domain}/SHOW_ELEMENT`,
  HIDE_ELEMENT: `${domain}/HIDE_ELEMENT`,
};

export const actions = {
  showElement: element => ({ type: actionTypes.SHOW_ELEMENT, element }),
  hideElement: ids => ({
    type: actionTypes.HIDE_ELEMENT,
    ids: Array.isArray(ids) ? ids : [ids],
  }),
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SHOW_ELEMENT: {
      let index = state.elements.findIndex(e => e.id === action.element.id);
      if (index === -1) {
        index = state.elements.length;
      }
      return update(state, { elements: { [index]: { $set: action.element } } });
    }

    case actionTypes.HIDE_ELEMENT: {
      return {
        ...state,
        elements: state.elements.filter(e => !action.ids.includes(e.id)),
      };
    }
  }
  return state;
}

export const selectors = {
  elements: state => state.elements,
};
