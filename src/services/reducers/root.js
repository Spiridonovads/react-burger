import { OrderNumberReducer } from './order-number';
import { ingredietsReducer } from './ingredients-data';
import { constructorReducer } from './constructor-data';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  ingredients: ingredietsReducer,
  orderNumber: OrderNumberReducer,
  constructor: constructorReducer
});