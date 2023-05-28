import { LOGIN_SUCCESS, LOGOUT } from "./constant";

const setLogin = (payload = null) => {
  return {
    type: LOGIN_SUCCESS,
    payload
  }
}
const setLogout = (payload = null) => {
  return {
    type: LOGOUT,
    payload
  }
}