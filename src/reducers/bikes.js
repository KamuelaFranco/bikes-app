import { REQUEST_BIKES_SUCCESS } from '../actions';

function bikes(state = [], action) {
	switch (action.type) {
		case REQUEST_BIKES_SUCCESS:
			return [...state, action.payload.data];
		default:
			return state;
	}
}

export default bikes;
