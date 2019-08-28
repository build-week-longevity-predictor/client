import axios from 'axios';

export const SEARCH_PLAYER_START = 'SEARCH_PLAYER_START';
export const SEARCH_PLAYER_SUCCESS = 'SEARCH_PLAYER_SUCCESS';
export const SEARCH_PLAYER_FAILURE = 'SEARCH_PLAYER_FAILURE';

// export const SEND_SMURF_DATA_START = 'SEND_SMURF_DATA_START';
// export const SEND_SMURF_DATA_SUCCESS = 'SEND_SMURF_DATA_SUCCESS';
// export const SEND_SMURF_DATA_FAILURE = 'SEND_SMURF_DATA_START';

// export const DELETE_SMURF_DATA_START = 'DELETE_SMURF_DATA_START';


export const searchPlayer = (player) => {
    return dispatch => {
    dispatch({ type: SEARCH_PLAYER_START, payload: player });
    axios
      .get('https://career-longevity-predictor.herokuapp.com/api/players')
      .then(res => {
        // res.data.data
        console.log(res.data);
        dispatch({ type: SEARCH_PLAYER_SUCCESS, payload: res.data});
      })
      .catch(err => {
          console.log(err)
        dispatch({ type: SEARCH_PLAYER_FAILURE, payload: err.response });
      });
  };
}

// export const sendData = (newSmurf) => {
//     return dispatch => {
//     dispatch({ type: SEND_SMURF_DATA_START });
//     axios
//       .post('http://localhost:3333/smurfs', newSmurf)
//       .then(res => {
//         // res.data.data
//         console.log(res);
//         dispatch({ type: SEND_SMURF_DATA_SUCCESS, payload: res.data});
//       })
//   };
// }

// export const deleteData = (id) => {
//     return dispatch => {
//     dispatch({ type: DELETE_SMURF_DATA_START });
//     axios
//       .delete(`http://localhost:3333/smurfs/${id}`)
//       .then(res => {
//         // res.data.data
//         console.log(res);
//         // dispatch({ type: SEND_SMURF_DATA_SUCCESS, payload: res.data});
//       })
    
//   };
// }
