import { CHANGE_CLASS_FILTER } from '../actions';

export default function classFilter(state = 'all', action) {
	if (!action) {
		return state;
	}
	if (action.type === CHANGE_CLASS_FILTER && action.payload && action.payload.filter) {
		return action.payload.filter;
	}
	return state;
}
