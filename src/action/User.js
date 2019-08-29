import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const LOGOUT_USER = "LOGOUT_USER";

const url = "https://career-longevity-predictor.herokuapp.com/api";

export const login = (payload, props, setErrors, setSubmitting) => async dispatch => {
  dispatch({ type: LOGIN_START });
  try {
    const res = await axios.post(url + "/auth/login", payload);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user))
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    setSubmitting(false) 
    props.history.push('/')    
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

export const signUp = (payload, props, setErrors, setSubmitting) => async dispatch => {
  dispatch({ type: SIGNUP_START });
  try {
    const res = await axios.post(url + "/auth/register", payload);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data.username
    })
    setSubmitting(false) 
    props.history.push('/login')   
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


export const logoutUser = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("user")
  return {
    type: LOGOUT_USER
  };
};