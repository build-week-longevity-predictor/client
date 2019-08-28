import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { adminReducer } from "./adminReducer";
import { PlayerReducer } from "./PlayerReducer";

const rootReducer = combineReducers({ user: userReducer, admin: adminReducer,player: PlayerReducer });
export default rootReducer;

