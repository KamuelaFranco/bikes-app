import { REQUEST_BIKES_SUCCESS } from '../actions';

export default function bikes(state = [], action) {
  if (!action) {
    return state;
  }
	switch (action.type) {
		case REQUEST_BIKES_SUCCESS:
			return [...state, action.payload.data];
		default:
			return state;
	}
}
