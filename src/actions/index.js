import 'isomorphic-fetch';

const bikesUrl = 'bikes.json';

// Action constants
export const CHANGE_CLASS_FILTER = 'CHANGE_CLASS_FILTER';
export const REQUEST_BIKES = 'REQUEST_BIKES';
export const REQUEST_BIKES_FAIL = 'REQUEST_BIKES_FAIL';
export const REQUEST_BIKES_SUCCESS = 'REQUEST_BIKES_SUCCESS';

export function requestBikesSuccess(data) {
  return {
    type: REQUEST_BIKES_SUCCESS,
    payload: { data },
  };
}

export function requestBikesFail(error) {
  return {
    type: REQUEST_BIKES_FAIL,
    payload: { error },
  };
}

export function requestBikes() {
  return async function(dispatch) {
    try {
      const response = await fetch(bikesUrl);
      const json = await response.json();
      dispatch(requestBikesSuccess(json.items));
    } catch (error) {
      dispatch(requestBikesFail(error));
    }
  };
}

export function changeClassFilter(filter) {
  return {
    type: CHANGE_CLASS_FILTER,
    payload: { filter },
  };
}
