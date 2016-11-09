import { combineReducers } from 'redux'

import auth from './auth';
import trucks from './trucks';
import currentTruck from './singleTruck';
import filters from './filter';
import shoppingCart from './shoppingCartReducer';
import currentUser from './user';

const rootReducer = combineReducers({
  auth,
  trucks,
  currentTruck,
  filters,
  shoppingCart,
  currentUser
})

export default rootReducer;
