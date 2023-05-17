import { combineReducers } from "redux";
import authReducer from "../common/state/authReducer";

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;
