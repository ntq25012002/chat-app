import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  friend: [],
};

const friendSlice = createSlice({
  name: 'friend',
  initialState,
  reducers: {
    getListUser: (state, action) => {
      console.log(action);
      state.user = action.payload;
    },
    getListFriend: (state, action) => {
      state.user = null;
    },
  },
});