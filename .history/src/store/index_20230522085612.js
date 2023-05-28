// store.js
import  {configureStore} from '@reduxjs/toolkit';
import userReducer from '~/reducer/userReducer.js';

const store = configureStore({
    reducer: {
      user: userReducer,
    },
  });
export default store;
