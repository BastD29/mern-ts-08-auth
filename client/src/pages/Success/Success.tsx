import { FC } from "react";
import { useLocation } from "react-router-dom";
import style from "./Success.module.scss";

const Success: FC = () => {
  const location = useLocation();
  const message = location.state.message || "Login successful";

  return (
    <div className={style["success"]}>
      <h2>{message}</h2>
    </div>
  );
};

export default Success;
