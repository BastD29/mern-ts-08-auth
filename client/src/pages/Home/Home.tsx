import { FC } from "react";
import style from "./Home.module.scss";

const Home: FC = () => {
  return (
    <div className={style["home"]}>
      <h2>Home</h2>
      {/* <p>Welcome, {state.user.email}</p> */}
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default Home;
