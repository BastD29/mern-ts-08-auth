import { FC } from "react";
import style from "./Home.module.scss";
import Login from "../Login/Login";

const Home: FC = () => {
  return (
    <div className={style["home"]}>
      <Login />
    </div>
  );
};

export default Home;
