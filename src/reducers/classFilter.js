import { CHANGE_CLASS_FILTER } from '../actions';

export default function classFilter(state = '', action) {
	if (!action) {
		return state;
	}
	if (action.type && action.payload && action.payload.filter) {
		return action.payload.filter;
	}
	return state;
}
