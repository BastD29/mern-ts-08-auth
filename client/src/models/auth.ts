import { LOGIN, LOGOUT, SET_TOKEN, SET_USER } from "../constants/actions";
import { UserType } from "./user";

// STATE

type AuthStateType = {
  user: UserType | null;
  token: string | null;
};

// ACTIONS

type LoginActionType = {
  type: typeof LOGIN;
  payload: { token: string; user: UserType };
};

type LogoutActionType = { type: typeof LOGOUT };

type SetUserActionType = {
  type: typeof SET_USER;
  payload: UserType;
};

type SetTokenActionType = { type: typeof SET_TOKEN; payload: string };

type AuthActionType =
  | LoginActionType
  | LogoutActionType
  | SetUserActionType
  | SetTokenActionType;

export type { AuthStateType, AuthActionType };
