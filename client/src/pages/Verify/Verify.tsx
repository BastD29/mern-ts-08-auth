import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { verify } from "../../services/verify";
import style from "./Verify.module.scss";

const Verify: FC = () => {
  const [message, setMessage] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    console.log("query:", query);

    const token = query.get("token");
    console.log("token:", token);

    const verifyToken = async () => {
      try {
        const response = await verify(token as string);
        console.log("response:", response);

        setMessage(response.message);
      } catch (error) {
        console.error("Error verifying token:", error);
        throw new Error("Verification failed. Please try again");
      }
    };

    if (token) {
      verifyToken();
    }
  }, [location]);

  return (
    <div className={style["verify"]}>
      <h2>Verify</h2>
      <p>{message}</p>
    </div>
  );
};

export default Verify;
