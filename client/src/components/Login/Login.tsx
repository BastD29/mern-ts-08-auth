import { FC, FormEvent, useState } from "react";
import style from "./Login.module.scss";

const Login: FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // const response = await
    } catch (error) {}
  };

  return (
    <form className={style["form"]} onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
