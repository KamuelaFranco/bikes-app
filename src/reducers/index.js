import { combineReducers } from 'redux';
import classFilter from './classFilter';
import bikes from './bikes';
import isLoading from './isLoading';

// Create a root reducer and expose it for store creation
const rootReducer = combineReducers({
  classFilter,
  bikes,
  isLoading,
});

export default rootReducer;
