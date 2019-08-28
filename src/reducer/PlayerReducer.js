import {SEARCH_PLAYER_START , SEARCH_PLAYER_SUCCESS , SEARCH_PLAYER_FAILURE } from '../action'

const InitialState = {
    name: "",
    allPlayers: [],
    error: ''

}

export const PlayerReducer = (state = InitialState, action) => {
    switch(action.type){
        case SEARCH_PLAYER_START:
            return {
                ...state,
                name: action.payload
            };
        case SEARCH_PLAYER_SUCCESS:
            return {
                ...state,
                allPlayers: action.payload
            };
        case SEARCH_PLAYER_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state
    }
}