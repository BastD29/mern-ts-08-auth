import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import style from "./AuthLayout.module.scss";

const AuthLayout: FC = () => {
  return (
    <div className={style["auth-layout"]}>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AuthLayout;
