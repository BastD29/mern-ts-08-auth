import { Context, Dispatch, createContext } from "react";
import { AuthActionType, AuthStateType } from "../../models/auth";

type AuthContextType = {
  state: AuthStateType;
  dispatch: Dispatch<AuthActionType>;
};

export const AuthContext: Context<AuthContextType | undefined> = createContext<
  AuthContextType | undefined
>(undefined);
