import { FC } from "react";
import style from "./Login.module.scss";

const Login: FC = () => {
  return (
    <form className={style["login"]}>
      <h2>Login</h2>
    </form>
  );
};

export default Login;
