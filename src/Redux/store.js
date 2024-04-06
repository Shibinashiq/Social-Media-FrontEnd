
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Redux/Auth/authSlice'


const store = configureStore({
  reducer: authReducer,

});

export default store;
