import { RouteObject } from "react-router-dom";
import { HOME, SUCCESS, VERIFY } from "../constants/routes";
import { FC, LazyExoticComponent, lazy } from "react";

const Home: LazyExoticComponent<FC> = lazy(() => import("../pages/Home/Home"));
const Success: LazyExoticComponent<FC> = lazy(
  () => import("../pages/Success/Success")
);
const Verify: LazyExoticComponent<FC> = lazy(
  () => import("../pages/Verify/Verify")
);

export const routes: RouteObject[] = [
  { path: HOME, element: <Home /> },
  { path: SUCCESS, element: <Success /> },
  { path: VERIFY, element: <Verify /> },
];
