import { RECEIVE_USER_DATA } from '../constants/actiontypes';

const initialState = {
  userData: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RECEIVE_USER_DATA:
      return {
        ...state,
        userData: payload.data,
      };
    default:
      return state;
  }
};
