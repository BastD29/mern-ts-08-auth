import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import style from "./AuthLayout.module.scss";
import Loader from "../../Loader/Loader";

const AuthLayout: FC = () => {
  return (
    <div className={style["auth-layout"]}>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AuthLayout;
