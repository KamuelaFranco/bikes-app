// Creates the store and exposes it to the app
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  Object.assign(rootReducer(), { classFilter: window.localStorage.getItem('filter') || '' }),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  )
);

export default store;
