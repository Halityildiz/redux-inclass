<<<<<<< HEAD
import { SET_USER_LIST, SET_SELECTED_USER } from "../types/userTypes";

const initialState = {
  userList: [],
  selectedUser: {},
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_LIST:
      return {
        ...state,
        userList: payload,
      };
    case SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
=======
import {
    SET_USER_LIST,
    SET_SELECTED_USER
} from '../types/userTypes'

const initialState = {
    userList: [],
    selectedUser: {},
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER_LIST:
            return {
                ...state,
                userList: payload,
            };
        case SET_SELECTED_USER:
            return {
                ...state,
                selectedUser: payload,
            };
        default:
            return state;
    }
}

export default userReducer;
>>>>>>> dfe6716159433c670a50fd8d94d11bb31f1e5fcd
