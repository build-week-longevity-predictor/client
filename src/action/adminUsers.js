import axiosWithAuth from "../utilities/axiosAuth";

export const GET_USERS_START = "GET_USERS_START";
export const GET_USERS_ERROR = "GET_USERS_ERROR";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
const url = "https://career-longevity-predictor.herokuapp.com/api";



export const getUsers = () => async dispatch => {
  dispatch({ type: GET_USERS_START });
  try {
    const res = await  axiosWithAuth()
    .get(url + "/users")
    console.log(res.data)
    dispatch({ 
      type: GET_USERS_SUCCESS, 
      payload: res.data 
    });
  }
  catch (err) {
    dispatch({
      type: GET_USERS_ERROR,
      payload: err
    });
  }  
}

