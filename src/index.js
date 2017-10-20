import { fromJS, List } from 'immutable';

export const domain = '@@Aurora';

const initialState = fromJS({
  elements: [],
});

export const actionTypes = {
  ADD_ELEMENT: `${domain}/ADD_ELEMENT`,
  REMOVE_ELEMENT: `${domain}/REMOVE_ELEMENT`,
};

export const actions = {
  addElement: element => {
    actionTypes.ADD_ELEMENT, element;
  },
  removeElement: id => {
    actionTypes.REMOVE_ELEMENT, id;
  },
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_ELEMENT: {
      let index = state
        .get('elements')
        .findIndex(e => e.get('id') === action.element.get('id'));
      if (index === -1) {
        index = state.get('elements').size;
      }
      return state.setIn(['elements', index], action.element);
    }

    case actionTypes.REMOVE_ELEMENT:
      return state.set(
        'elements',
        state.get('elements').filter(e => e.get('id') === action.id),
      );
  }
  return state;
}

export const selectors = {
  elements: state => state.get('elements', List()),
};
