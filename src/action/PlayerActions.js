import axios from "axios";
import axiosAuth from '../utilities/axiosAuth';

const url = "https://career-longevity-predictor.herokuapp.com/api/players";

export const GET_PLAYER_NAMES_START = "GET_PLAYER_NAMES_START";
export const GET_PLAYER_NAMES_SUCCESS = "GET_PLAYER_NAMES_SUCCESS";
export const GET_PLAYER_NAMES_FAILURE = "GET_PLAYER_NAMES_FAILURE";

export const getPlayerNames = () => async dispatch => {
  dispatch({ type: GET_PLAYER_NAMES_START });
  try {
    const res = await axios.get(url);
    const playerNames =  Array.from(new Set(res.data.map(k => k.player))).sort()
    dispatch({
      type: GET_PLAYER_NAMES_SUCCESS,
      payload: playerNames
    });
  } catch (err) {
    dispatch({
      type: GET_PLAYER_NAMES_FAILURE,
      payload: err
    });
  }
};

export const GET_PLAYERS_START = "GET_PLAYERS_START";
export const GET_PLAYERS_SUCCESS = "GET_PLAYERS_SUCCESS";
export const GET_PLAYERS_FAILURE = "GET_PLAYERS_FAILURE";

export const getPlayers = () => async dispatch => {
  dispatch({ type: GET_PLAYERS_START });
  try {
    const res = await axios.get(url);
    dispatch({
      type: GET_PLAYERS_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_PLAYERS_FAILURE,
      payload: err
    });
  }
};

export const SEARCH_PLAYER_START = "SEARCH_PLAYER_START";
export const SEARCH_PLAYER_SUCCESS = "SEARCH_PLAYER_SUCCESS";
export const SEARCH_PLAYER_FAILURE = "SEARCH_PLAYER_FAILURE";

export const searchPlayer = player => async dispatch => {
  dispatch({ type: SEARCH_PLAYER_START, payload: player });
  const nameUnderscore = player.replace(/ /g, "_")
  try {
    const res = await axios.get(`https://career-longevity-predictor.herokuapp.com/api/players/search/${nameUnderscore}`);
    dispatch({
      type: SEARCH_PLAYER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SEARCH_PLAYER_FAILURE,
      payload: err
    });
  }  
};



