import {
  GET_USERS_START,
  GET_USERS_ERROR,
  GET_USERS_SUCCESS
} from "../action/adminUsers";

const initialState = {
  error: null,
  gettingUsers: false,
  allUsers: [],

};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_START:
      return {
        ...state,
        gettingUsers: true,
        error: false
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        gettingUsers: false,
        allUsers: action.payload
      };
    case GET_USERS_ERROR: {
      return {
        ...state,
        gettingUsers: false,        
        error: action.payload
      };
    }
    default:
      return state;
  }
};
