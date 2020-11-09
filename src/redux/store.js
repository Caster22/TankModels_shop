import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { initialState } from './initialState';
import { reducer as PromotionReducer } from './PromotionsRedux';
import { reducer as ModelsReducer} from './ModelsRedux';
import { reducer as CountriesReducer } from './CountriesRedux';
import { reducer as CartReducer } from './CartRedux';


// define reducers
const reducers = {
  promotions: PromotionReducer,
  models: ModelsReducer,
  countries: CountriesReducer,
  cartItems: CartReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
export const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
