import { combineReducers } from 'redux';
import classFilter from './classFilter';
import bikes from './bikes';
import isFetching from './isFetching';

// Create a root reducer and expose it for store creation
const rootReducer = combineReducers({
  classFilter,
  bikes,
  isFetching,
});

export default rootReducer;
