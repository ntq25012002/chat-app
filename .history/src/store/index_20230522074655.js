// store.js
import  {configureStore} from '@reduxjs/toolkit';
import {userReducer} from '~/reducer';

const store = configureStore(userReducer);

export default store;
