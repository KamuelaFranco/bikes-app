// Creates the store and exposes it to the app
const { createStore, applyMiddleware } = require('redux');
const rootReducer = require('../reducers');
const thunkMiddleware = require('redux-thunk');
//const createLogger = require('redux-logger');

//const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
);

module.exports = store;