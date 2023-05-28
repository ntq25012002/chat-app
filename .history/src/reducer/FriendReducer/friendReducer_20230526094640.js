import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  friends: [],
};

const friendSlice = createSlice({
  name: 'friend',
  initialState,
  reducers: {
    getListUser: (state, action) => {
      console.log(action);
      state.users = action.payload;
    },
    getListFriend: (state, action) => {
      state.friends = action.payload;
    },
  },
});