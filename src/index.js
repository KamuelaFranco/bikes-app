import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

import { Provider } from 'react-redux';

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
