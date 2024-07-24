import { FC } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import style from "./Home.module.scss";

const Home: FC = () => {
  const { state } = useAuthContext();

  console.log("state:", state);

  return (
    <div className={style["home"]}>
      <h2>Home</h2>
      {/* {state.user && <p>Welcome, {state.user?.email}</p>} */}
      {state.user ? (
        <p>Welcome, {state.user.email}</p>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Home;
