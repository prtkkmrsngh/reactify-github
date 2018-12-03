import {
  REQUEST_USER_REPOS,
  RECEIVE_USER_REPOS,
} from '../constants/actiontypes';

export const requestUserRepos = q => ({
  type: REQUEST_USER_REPOS,
  payload: {
    q,
  },
});
export const receiveUserRepos = data => ({
  type: RECEIVE_USER_REPOS,
  payload: {
    data,
  },
});
