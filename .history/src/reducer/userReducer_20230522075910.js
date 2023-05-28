import { LOGIN_SUCCESS, LOGOUT } from "./constant";

const initialState = {
  isLoggedIn: false,
  user: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log('isLoggedIn: ', action.payload);
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
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
