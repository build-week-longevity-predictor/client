import axios from "axios";
//import axiosWithAuth from "../utilities/axiosAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const LOGOUT_USER = "LOGOUT_USER";


const url = "https://career-longevity-predictor.herokuapp.com/api";



export const login = credentials => async dispatch => {
  dispatch({ type: LOGIN_START });
  try {
    const res = await  axios
    .post(url + "/auth/login", credentials)
    localStorage.setItem("token", res.data.token);
    dispatch({ 
      type: LOGIN_SUCCESS, 
      payload: res.data.message 
    });
  }
  catch (err) {
    dispatch({
      type: LOGIN_ERROR,
      payload: err
    });
  }  
}



export const logoutUser = () => {
  localStorage.removeItem("token");

  return {
    type: LOGOUT_USER
  };
};

export const signUp = credentials => dispatch => {
  dispatch({ type: SIGNUP_START });
  axios
    .post(url + "/auth/register", credentials)
    .then(res => {
      // localStorage.setItem("token", res.data.token);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data.username });
    })
    .catch(err => dispatch({ type: SIGNUP_ERROR, payload: err.message }));
};
