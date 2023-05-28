import { LOGIN_SUCCESS, LOGOUT } from "./constant";

const initialState = {
  isLoggedIn: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};

export {initialState};
export default userReducer;
