import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  friend: null,
};

const friendSlice = createSlice({
  name: 'friend',
  initialState,
  reducers: {
    getListUsers: (state, action) => {
      console.log(action);
      // state.isLoggedIn = true;
      // state.user = action.payload;
    },
    getListFriends: (state,action) => {
      console.log(action);
      // state.isLoggedIn = false;
      // state.user = null;
    },
  },
});

export const { getListUsers, getListFriends } = friendSlice.actions;
export default friendSlice.reducer;
