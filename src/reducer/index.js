import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { PlayerReducer } from "./PlayerReducer";

const rootReducer = combineReducers({ user: userReducer, player: PlayerReducer});



export default rootReducer;
