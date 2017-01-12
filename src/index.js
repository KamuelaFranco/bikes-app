import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const { Provider } = require('react-redux');
const App = require('./containers/App');

const store = require('./store');
const actions = require('./actions');

// Initial loading
store.getState();
store.dispatch(actions.fetchGames());
let unsubscribe = store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
