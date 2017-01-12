import 'isomorphic-fetch';

const bikesUrl = 'https://jujhar.com/bikes.json';

// Action constants
export const CHANGE_CATEGORY_FILTER = 'CHANGE_CATEGORY_FILTER';
export const REQUEST_BIKES = 'REQUEST_BIKES';
export const REQUEST_BIKES_FAIL = 'REQUEST_BIKES_FAIL';
export const REQUEST_BIKES_SUCCESS = 'REQUEST_BIKES_SUCCESS';

export function requestBikesSuccess(data) { }
export function requestBikesFail(error) { }

export function requestBikes() {
  return async function(dispatch) {
    try {
      const response = await fetch(bikesUrl);
      const json = await response.json();
      dispatch(requestBikesSuccess(json));
    } catch (error) {
      dispatch(requestBikesFail(error));
    }
  };
}

export function changeCategoryFilter(filter) {
  return {
    type: CHANGE_CATEGORY_FILTER,
    filter
  };
}
