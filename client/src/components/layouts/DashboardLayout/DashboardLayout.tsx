import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import style from "./DashboardLayout.module.scss";

const DashboardLayout: FC = () => {
  return (
    <div className={style["dashboard-layout"]}>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
