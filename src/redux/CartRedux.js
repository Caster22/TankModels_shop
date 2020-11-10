import Axios from 'axios';

/* selectors */
export const getCartItems = ({ cartItems }) => cartItems;

/* action name creator */
const reducerName = 'cartItems';
const createActionName = name => `app/${reducerName}/${name}`;

/* action type */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_ITEM = createActionName('ADD_ITEM');
const ADD_NEW_ORDER = createActionName('ADD_NEW_ORDER');
const PLUS_QUANTITY = createActionName('PLUS_QUANTITY');
const MINUS_QUANTITY = createActionName('MINUS_QUANTITY');

export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const addNewOrder = payload => ({payload, type: ADD_NEW_ORDER});
export const addItem = payload => ({ payload, type: ADD_ITEM });
export const plusQuantity = payload => ({ payload, type: PLUS_QUANTITY });
export const minusQuantity = payload => ({ payload, type: MINUS_QUANTITY });

/* thnuk creators */
export const addNewOrderRequest = (order) => {
  return async dispatch => {
    dispatch(fetchStarted());

    try {
      let res = await Axios.post('http://localhost:8000/api/cart', order);
      await new Promise((resolve) => resolve());
      dispatch(addNewOrder(res));
    } catch(e) {
      dispatch(fetchError(e.message || true));
    }
  };
};


/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case ADD_NEW_ORDER: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: [
          ...statePart.data,
          ...action.payload,
        ],
      };
    }
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
