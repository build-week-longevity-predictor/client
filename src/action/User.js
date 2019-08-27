import axios from "axios";
import axiosWithAuth from "../utilities/axiosAuth";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOAD_TOKEN = "LOAD_TOKEN";
export const LOG_OUT = "LOG_OUT";
export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

const url = "https://career-longevity-predictor.herokuapp.com/api";

export const logOut = () => ({
  type: LOG_OUT
});

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN });
  return axios.post(url + "/auth/login", credentials).then(res => {
    localStorage.setItem("token", res.data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
  });
};

export const signUp = credentials => dispatch => {
  console.log(credentials);
  dispatch({ type: FETCHING });
  axios
    .post(url + "/auth/register", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: ERROR, payload: err }));
};
