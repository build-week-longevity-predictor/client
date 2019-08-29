import {
    SEARCH_PLAYER_START,
    SEARCH_PLAYER_SUCCESS,
    SEARCH_PLAYER_FAILURE,
    GET_PLAYERS_START,
    GET_PLAYERS_SUCCESS,
    GET_PLAYERS_FAILURE,
    GET_PLAYER_NAMES_START,
    GET_PLAYER_NAMES_SUCCESS,
    GET_PLAYER_NAMES_FAILURE    
} from "../action";

const InitialState = {
    gettingPlayers: false,
    gettingPlayer: false,    
    name: "",
    nameUnderscore: "",
    allPlayers: [],
    playersLoaded:false,
    allPlayersNames: [],
    playersNamesLoaded: false,
    player:{},
    playerLoaded:false,    
    error: ""
};

export const PlayerReducer = (state = InitialState, action) => {
    switch (action.type) {
        case GET_PLAYERS_START:
            return {
                ...state,
                gettingPlayers: true,
                error: false
            };
        case GET_PLAYERS_SUCCESS:
            return {
                ...state,
                gettingPlayers: false,
                allPlayers: action.payload,
                playersLoaded: true                
            };
        case GET_PLAYERS_FAILURE: {
            return {
                ...state,
                gettingPlayers: false,
                error: action.payload,
                playersLoaded: false
            };
        }
        case GET_PLAYER_NAMES_START:
            return {
                ...state,
                gettingPlayers: true,
                error: false
            };
        case GET_PLAYER_NAMES_SUCCESS:
            return {
                ...state,
                gettingPlayers: false,
                allPlayersNames: action.payload,
                playersNamesLoaded: true                
            };
        case GET_PLAYER_NAMES_FAILURE: {
            return {
                ...state,
                gettingPlayers: false,
                error: action.payload,
                playersNamesLoaded: false
            };
        }        
        case SEARCH_PLAYER_START:
            return {
                ...state,
                name: action.payload,
                gettingPlayer: true,
                error: false
            };
        case SEARCH_PLAYER_SUCCESS:
        const player = action.payload.reduce((ac, cv) => [...ac, ...cv])
            return {
                ...state,
                player: player,
                gettingPlayer: false,
                playerLoaded:true                                    
            };
        case SEARCH_PLAYER_FAILURE:
            return {
                ...state,
                error: action.payload,
                gettingPlayer: false ,
                playerLoaded:false               
            };
        default:
            return state;
    }
};
