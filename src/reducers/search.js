import { RECEIVE_SEARCH_API_DATA } from '../constants/actiontypes';

const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RECEIVE_SEARCH_API_DATA:
      return {
        ...state,
        users: payload.data,
      };
    default:
      return state;
  }
};
