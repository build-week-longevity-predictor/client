import {
  LOGIN,
  LOGIN_SUCCESS,
  LOAD_TOKEN,
  LOG_OUT,
  FETCHING,
  SUCCESS
} from "../action";

const initialState = {
  loggingIn: false,
  error: null,
  loggedIn: false,
  token: null,
  fetching: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_OUT:
      return { ...state, loggedIn: false };
    case LOAD_TOKEN:
      return { ...state, loggedIn: true, token: action.payload };
    case LOGIN:
      return { ...state, fetchingFriends: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload,
        loggedIn: true
      };
    case FETCHING:
      return {
        ...state,
        error: null,
        fetching: true
      };
    case SUCCESS:
      return {
        ...state,
        error: null,
        fetching: false
      };

    default:
      return state;
  }
};
