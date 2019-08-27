import axios from 'axios';

export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START';
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS';
export const FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA_FAILURE';

export const SEND_SMURF_DATA_START = 'SEND_SMURF_DATA_START';
export const SEND_SMURF_DATA_SUCCESS = 'SEND_SMURF_DATA_SUCCESS';
export const SEND_SMURF_DATA_FAILURE = 'SEND_SMURF_DATA_START';

export const DELETE_SMURF_DATA_START = 'DELETE_SMURF_DATA_START';


export const getData = () => {
    return dispatch => {
    dispatch({ type: FETCH_SMURF_DATA_START });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        // res.data.data
        console.log(res.data);
        dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res.data});
      })
      .catch(err => {
        // dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: err.response });
      });
  };
}

export const sendData = (newSmurf) => {
    return dispatch => {
    dispatch({ type: SEND_SMURF_DATA_START });
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        // res.data.data
        console.log(res);
        dispatch({ type: SEND_SMURF_DATA_SUCCESS, payload: res.data});
      })
  };
}

export const deleteData = (id) => {
    return dispatch => {
    dispatch({ type: DELETE_SMURF_DATA_START });
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        // res.data.data
        console.log(res);
        // dispatch({ type: SEND_SMURF_DATA_SUCCESS, payload: res.data});
      })
    
  };
}
