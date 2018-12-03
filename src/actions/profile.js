import { REQUEST_USER_DATA, RECEIVE_USER_DATA } from '../constants/actiontypes';

export const requestUserData = q => ({
  type: REQUEST_USER_DATA,
  payload: {
    q,
  },
});
export const receiveUserData = data => ({
  type: RECEIVE_USER_DATA,
  payload: {
    data,
  },
});
