const { RECEIVE_JACKPOT_AMOUNTS } = require('../actions');

function jackpotAmounts(state = [], action) {
	switch (action.type) {
		case RECEIVE_JACKPOT_AMOUNTS:
			if (action.error) {
				return state;
			} else {
				return [...action.amounts];
			}
		default:
			return state;
	}
}

module.exports = jackpotAmounts;