import {
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_ERROR
} from "../action/User";

const initialState = {
  loggingIn: false,
  error: null,
  loggedIn: false,
  signingUp: false,
  loginStatus: "no",
  token: localStorage.getItem("token"),
  message: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        loginStatus: "yes",
        token: localStorage.getItem("token"),
        message: action.payload
      };
    case LOGIN_ERROR: {
      return {
        ...state,
        error: action.payload,
        loginStatus: "failure"
      };
    }
    case SIGNUP_START:
      return {
        ...state,
        signingUp: true
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp: false,
        message: action.payload
      };
    case SIGNUP_ERROR: {
      return {
        ...state,
        signingUp: false,
        error: action.payload
      };
    }

    default:
      return state;
  }
};
