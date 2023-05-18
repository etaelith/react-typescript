import styles from "@/styles/home.module.css";
import UserContainer from "@/container/UserContainer";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
const Home = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Home</h2>
        <button
          onClick={signOut}
          style={{
            cursor: "pointer",
            padding: ".75em",
            borderRadius: "50px",
            maxWidth: "200px",
          }}
        >
          LogOut
        </button>
      </div>
      <UserContainer />
    </div>
  );
};

export default Home;
