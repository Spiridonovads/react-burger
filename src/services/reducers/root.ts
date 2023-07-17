import { orderNumberReducer } from './order-number';
import { ingredietsReducer } from './ingredients-data';
import { constructorReducer } from './constructor-data';
import { resetReducer } from './reset-password-data';
import { forgotReducer } from './forgot-password-data';
import { registerReducer } from './register-data';
import { loginReducer } from './login-data';
import { logoutReducer } from './logout-data';
import { personReducer } from './person-data';
import { combineReducers } from 'redux';
import { feedReducer } from './feed-data';
import { wsReducer } from './socket-data';

export const rootReducer = combineReducers({
  ingredients: ingredietsReducer,
  orderNumber: orderNumberReducer,
  constructor: constructorReducer,
  reset: resetReducer,
  forgot: forgotReducer,
  register: registerReducer,
  login: loginReducer,
  logout: logoutReducer,
  person: personReducer,
  feed: feedReducer,
  socket: wsReducer
});
