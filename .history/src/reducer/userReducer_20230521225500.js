import { LOGIN_SUCCESS, LOGOUT } from "./constant";

const initialState = {
  isLoggedIn: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log('isLoggedIn: ', action.payload);
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export {userReducer, initialState};
