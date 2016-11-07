import { combineReducers } from 'redux'

import auth from './auth';
import trucks from './trucks';
import currentTruck from './singleTruck';
import filters from './filter';
import shoppingCart from './shoppingCart';

const rootReducer = combineReducers({
  auth,
  trucks,
  currentTruck,
  filters,
  shoppingCart
})

export default rootReducer;
