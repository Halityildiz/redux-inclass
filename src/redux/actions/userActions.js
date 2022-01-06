<<<<<<< HEAD
import { SET_USER_LIST, SET_SELECTED_USER } from "../types";

export const setUserListAction = (userList) => ({
  type: SET_USER_LIST,
  payload: userList,
});

export const setSelectedUserAction = (user) => ({
  type: SET_SELECTED_USER,
  payload: user,
});
=======
import {
    SET_USER_LIST,
    SET_SELECTED_USER
} from '../types'

export const setUserListAction = (userList) => ({ type: SET_USER_LIST, payload: userList });

export const setSelectedUserAction = (user) => ({ type: SET_SELECTED_USER, payload: user });
>>>>>>> dfe6716159433c670a50fd8d94d11bb31f1e5fcd
