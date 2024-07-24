import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import style from "./DashboardLayout.module.scss";
import Loader from "../../Loader/Loader";

const DashboardLayout: FC = () => {
  return (
    <div className={style["dashboard-layout"]}>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
