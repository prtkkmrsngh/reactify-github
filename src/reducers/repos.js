import { RECEIVE_USER_REPOS } from '../constants/actiontypes';

const initialState = {
  userRepos: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RECEIVE_USER_REPOS:
      return {
        ...state,
        userRepos: payload.data,
      };
    default:
      return state;
  }
};
