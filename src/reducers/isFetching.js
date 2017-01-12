'use strict';

const { REQUEST_GAMES,
				RECEIVE_GAMES,
				REQUEST_JACKPOT_AMOUNTS,
				RECEIVE_JACKPOT_AMOUNTS } = require('../actions');

// TODO: See if this state object is optimal

function isFetching(state = { games: false, jackpots: false }, action) {
	switch (action.type) {
		case REQUEST_GAMES:
			return Object.assign({}, state, {games: true});
		case RECEIVE_GAMES:
			return Object.assign({}, state, {games: false});
		case REQUEST_JACKPOT_AMOUNTS:
			return Object.assign({}, state, {jackpots: true});
		case RECEIVE_JACKPOT_AMOUNTS:
			return Object.assign({}, state, {jackpots: false});
		default:
			return state;
	}
}

module.exports = isFetching;