import { FC, ReactNode, useEffect, useReducer } from "react";
import { initialState, reducer } from "../../reducers/auth";
import { AuthContext } from "./AuthContext";
import { getMe } from "../../services/getMe";
import { SET_USER } from "../../constants/actions";
import { UserType } from "../../models/user";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // console.log("initialState:", initialState);

  useEffect(() => {
    const fetchUserData = async () => {
      if (state.token) {
        try {
          const response: UserType = await getMe(state.token);
          // console.log("response:", response);

          dispatch({ type: SET_USER, payload: response });
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    fetchUserData();
  }, [state.token]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
