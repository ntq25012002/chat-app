import { LOGIN_SUCCESS, LOGOUT } from "./constant";

const setLogin = (payload) => {
  return {
    type: LOGIN_SUCCESS
  }
}
const setLogout = (payload) => {
  return {
    type: LOGOUT
  }
}