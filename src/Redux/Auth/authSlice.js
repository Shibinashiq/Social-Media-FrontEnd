import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('authState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const initialState = loadState() || {
  isLoggedIn: false,
  userId: null,
  username: null,
  token: null,
  refresh:null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { userId, username, token ,refresh } = action.payload; 
      state.isLoggedIn = true;
      state.userId = userId;
      state.token = token;
      state.username = username;
      state.refresh=refresh;
     
      localStorage.setItem('authState', JSON.stringify(state));
  
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userId = null;
      state.token = null;
      state.username = null;
     
      localStorage.removeItem('authState');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
