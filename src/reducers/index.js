const { combineReducers } = require('redux');
const categoryFilter = require('./categoryFilter');
const games = require('./games');
const isFetching = require('./isFetching');
const jackpotAmounts = require('./jackpotAmounts');

// Create a root reducer and expose it for store creation
const rootReducer = combineReducers({
    categoryFilter,
    games,
    isFetching,
    jackpotAmounts
});

module.exports = rootReducer;