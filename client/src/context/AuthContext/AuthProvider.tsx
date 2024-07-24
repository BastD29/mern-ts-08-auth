import { FC, ReactNode, /* useEffect, */ useReducer } from "react";
import { initialState, reducer } from "../../reducers/auth";
import { AuthContext } from "./AuthContext";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("initialState:", initialState);

  //   useEffect(() => {
  //     const fetchProfile = async () => {};
  //     fetchProfile();
  //   }, [state.token]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
