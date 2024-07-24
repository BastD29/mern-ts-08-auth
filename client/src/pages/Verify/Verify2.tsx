import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verify } from "../../services/verify";
import { useAuthContext } from "../../hooks/useAuthContext";
import { SET_TOKEN } from "../../constants/actions";
import style from "./Verify.module.scss";

const Verify: FC = () => {
  const [message, setMessage] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();

  const { dispatch } = useAuthContext();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    console.log("query:", query);

    const token = query.get("token");
    console.log("token:", token);

    if (!token) {
      setMessage("No token found");
      return;
    }

    const verifyToken = async () => {
      try {
        const response = await verify(token as string);
        console.log("response:", response);
        setMessage(response.message);
        localStorage.setItem("token", token);
        dispatch({ type: SET_TOKEN, payload: token });
        navigate("/");
      } catch (error) {
        console.error("Error verifying token:", error);
        throw new Error("Verification failed. Please try again");
      }
    };

    verifyToken();
  }, [location]);

  return (
    <div className={style["verify"]}>
      <h2>Verify</h2>
      <p>{message}</p>
    </div>
  );
};

export default Verify;
