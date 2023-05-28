import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  friend: {},
};

const friendSlice = createSlice({
  name: 'friend',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      console.log(action);
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});