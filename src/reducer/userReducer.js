import {
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_ERROR,
  LOGOUT_USER
} from "../action/User";

const initialState = {
  loggingIn: false,
  error: false,
  loggedIn: false,
  signingUp: false,
  loginStatus: "no",
  token: localStorage.getItem("token"),
  message: null,
  user: []
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
        message: action.payload.message,
        loggedIn: true,
        user: action.payload.user

      };
    case LOGIN_ERROR: {
      return {
        ...state,
        error: true,
        loggingIn: false,
        loggedIn: false
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        loggedIn: false
      }
    }
    case SIGNUP_START:
      return {
        ...state,
        error: false,        
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
        error: true,
        signingUp: false
      };
    }

    default:
      return state;
  }
};
