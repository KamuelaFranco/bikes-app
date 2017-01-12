const { RECEIVE_GAMES } = require('../actions');

function games(state = [], action) {
	switch (action.type) {
		case RECEIVE_GAMES:
			if (action.error) {
				return 'error';
			} else {
				return [...action.games];
			}
		default:
			return state;
	}
}

module.exports = games;