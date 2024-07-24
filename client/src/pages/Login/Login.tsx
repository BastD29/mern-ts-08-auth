import { FC, FormEvent, useState } from "react";
import { login } from "../../services/login";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.scss";

const Login: FC = () => {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await login(email);
      console.log("response:", response);

      navigate("/auth/success", { state: { message: response.message } }); // message: "Check your email to finish logging in"
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form className={style["login"]} onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
