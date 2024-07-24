import { LOGIN, LOGOUT, SET_TOKEN, SET_USER } from "../constants/actions";
import { AuthActionType, AuthStateType } from "../models/auth";

const initialState: AuthStateType = {
  user: null,
  token: localStorage.getItem("token"),
};

const reducer = (
  state: AuthStateType,
  action: AuthActionType
): AuthStateType => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export { initialState, reducer };
