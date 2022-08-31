import { combineReducers } from "redux";
import  userReducer from './userReducer.js';

const reducers = combineReducers({
    users: userReducer
});

export default reducers