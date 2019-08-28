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

export const login = (payload, setErrors, setSubmitting) => async dispatch => {
  dispatch({ type: LOGIN_START });
  try {
    const res = await axios.post(url + "/auth/login", payload);
    localStorage.setItem("token", res.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.message
    });
  } catch (err) {
    dispatch({
      type: LOGIN_ERROR,
      payload: err,
      error: true
    });
    setSubmitting(false)
    setErrors({login: err})    
  }
};

export const logoutUser = () => {
  localStorage.removeItem("token")
  return {
    type: LOGOUT_USER
  };
};

export const signUp = (payload, props, setErrors, setSubmitting) => async dispatch => {
  dispatch({ type: SIGNUP_START });
  try {
    const res = await axios.post(url + "/auth/register", payload);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data.username
    })
    setSubmitting(false) 
    props.history.push('/')   
  } catch (err) {
    dispatch({
      type: SIGNUP_ERROR,
      payload: err,
      error: true
    });
    setSubmitting(false)
    setErrors({signup: err})
    
  }
};
