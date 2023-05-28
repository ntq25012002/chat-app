import { LOGIN_SUCCESS, LOGOUT } from "./constant";

const initialState = false;
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
