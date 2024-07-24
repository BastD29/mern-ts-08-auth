import { FC, LazyExoticComponent, lazy } from "react";
import { RouteObject } from "react-router-dom";

const DashboardLayout: LazyExoticComponent<FC> = lazy(
  () => import("../components/layouts/DashboardLayout/DashboardLayout")
);
const Home: LazyExoticComponent<FC> = lazy(() => import("../pages/Home/Home"));
const AuthLayout: LazyExoticComponent<FC> = lazy(
  () => import("../components/layouts/AuthLayout/AuthLayout")
);
const Login: LazyExoticComponent<FC> = lazy(
  () => import("../pages/Login/Login")
);
const NotFound: LazyExoticComponent<FC> = lazy(
  () => import("../pages/NotFound/NotFound")
);

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [{ path: "", element: <Home /> }],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [{ path: "login", element: <Login /> }],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
