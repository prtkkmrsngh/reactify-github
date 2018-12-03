import {
  REQUEST_SEARCH_API_DATA,
  RECEIVE_SEARCH_API_DATA,
} from '../constants/actiontypes';

export const requestSearchApiData = q => ({
  type: REQUEST_SEARCH_API_DATA,
  payload: {
    q,
  },
});
export const receiveSearchApiData = data => ({
  type: RECEIVE_SEARCH_API_DATA,
  payload: {
    data,
  },
});
