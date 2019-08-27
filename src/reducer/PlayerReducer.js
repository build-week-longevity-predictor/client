import {FETCH_SMURF_DATA_START, FETCH_SMURF_DATA_SUCCESS, SEND_SMURF_DATA_START,SEND_SMURF_DATA_SUCCESS} from '../actions'

const InitialState = {
    name: "testt"
}

export const PlayerReducer = (state = InitialState, action) => {
    switch(action.type){
        default:
            return state
    }
}