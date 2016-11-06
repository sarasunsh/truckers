import { combineReducers } from 'redux'

import auth from './auth';
import trucks from './trucks';
import currentTruck from './singleTruck';
import filters from './filter';

const rootReducer = combineReducers({
  auth,
  trucks,
  currentTruck,
  filters
})

export default rootReducer
