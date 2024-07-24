import { FC, Suspense, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import style from "./AuthLayout.module.scss";

const AuthLayout: FC = () => {
  const { state } = useAuthContext();
  const navigate = useNavigate();

  // console.log("state.token:", state.token);

  useEffect(() => {
    if (state.token) {
      navigate("/");
    }
  }, [state.token]);

  return (
    <div className={style["auth-layout"]}>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AuthLayout;
