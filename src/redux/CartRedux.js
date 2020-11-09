/* selectors */
export const getCartItems = ({ cartItems }) => cartItems;

/* action name creator */
const reducerName = 'cartItems';
const createActionName = name => `app/${reducerName}/${name}`;

/* action type */

const ADD_ITEM = createActionName('ADD_ITEM');

export const addItem = payload => ({ payload, type: ADD_ITEM });

/* reducer */

export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...statePart,
        items: [action.payload, ...statePart.items],
      };
    }
    default:
      return statePart;
  }
};
