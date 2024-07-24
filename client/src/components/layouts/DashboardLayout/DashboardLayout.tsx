import { FC, Suspense, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import style from "./DashboardLayout.module.scss";

const DashboardLayout: FC = () => {
  const { state } = useAuthContext();
  const navigate = useNavigate();

  // console.log("state.token:", state.token);

  useEffect(() => {
    if (!state.token) {
      navigate("/auth/login");
    }
  }, [state.token]);

  return (
    <div className={style["dashboard-layout"]}>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
