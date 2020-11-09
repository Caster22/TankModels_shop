/* selectors */
export const getCartItems = ({ cartItems }) => cartItems;

/* action name creator */
const reducerName = 'cartItems';
const createActionName = name => `app/${reducerName}/${name}`;

/* action type */

const ADD_ITEM = createActionName('ADD_ITEM');
const PLUS_QUANTITY = createActionName('PLUS_QUANTITY');
const MINUS_QUANTITY = createActionName('MINUS_QUANTITY');

export const addItem = payload => ({ payload, type: ADD_ITEM });
export const plusQuantity = payload => ({ payload, type: PLUS_QUANTITY });
export const minusQuantity = payload => ({ payload, type: MINUS_QUANTITY });

/* reducer */

export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...statePart,
        items: [ ...statePart.items, action.payload],
      };
    }
    case PLUS_QUANTITY: {
      //const selectedElement = statePart.items.filter(item => item.id === action.payload);
      //console.log('log',selectedElement);
      return {
        ...statePart,
      };
    }
    case MINUS_QUANTITY: {
      //const selectedElement = statePart.items.filter(item => item.id === action.payload);
      //console.log('log',selectedElement);
      return {
        ...statePart,
      };
    }
    default:
      return statePart;
  }
};
