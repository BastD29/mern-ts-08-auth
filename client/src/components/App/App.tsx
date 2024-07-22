import { FC } from "react";
import Login from "../../pages/Login/Login";
import style from "./App.module.scss";

const App: FC = () => {
  return (
    <div className={style["app"]}>
      <Login />
    </div>
  );
};

export default App;
