import { REQUEST_BIKES, REQUEST_BIKES_FAIL, REQUEST_BIKES_SUCCESS } from '../actions';

export default function isFetching(state = false, action) {
	if (!action) {
		return state;
	}
	switch (action.type) {
		case REQUEST_BIKES:
			return true;
		case REQUEST_BIKES_FAIL:
			return false;
		case REQUEST_BIKES_SUCCESS:
			return false;
		default:
			return state;
	}
}
