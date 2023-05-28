import { LOGIN_SUCCESS, LOGOUT } from "./constant";

export const loginSuccess = () => {
  return {
    type: 'LOGIN_SUCCESS',
  };
};

// userReducer.js
const initialState = {
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
      };
    // case 'LOGIN_SUCCESS':
    //   return {
    //     ...state,
    //     isLoggedIn: true,
    //   };
    default:
      return state;
  }
};

export default userReducer;
