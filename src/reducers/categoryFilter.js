const { CHANGE_CATEGORY_FILTER } = require('../actions');

function categoryFilter(state = 'top', action) {
	switch (action.type) {
		case CHANGE_CATEGORY_FILTER:
			switch (String(action.filter).toLowerCase()) {
				case 'all': return 'all';
				case 'top': return 'top';
				case 'slots': return 'slots';
				case 'poker': return 'poker';
				case 'blackjack': return 'blackjack';
				case 'fun': return 'fun';
				case 'ball': return 'ball';
				case 'new': return 'new';
				case 'virtual': return 'virtual';
				default: return state;
			}
		default:
			return state;
	}
}

module.exports = categoryFilter;