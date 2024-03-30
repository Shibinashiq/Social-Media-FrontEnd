import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './Auth/authSlice'; // Import your auth slice reducer


const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;