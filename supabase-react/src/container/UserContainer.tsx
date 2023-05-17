import { useContext } from "react";
import FormBill from "../components/FormBill";
import { UserContext } from "../context/UserContext";
import Item from "../components/common/Item";
import styles from "../styles/userContainer.module.css";
const UserContainer = () => {
  const { todo, loading } = useContext(UserContext);
  const items = todo.tabs;
  const elements = items?.map((item) => <Item key={item.id} item={item} />);
  return (
    <>
      <FormBill />
      <div className={styles.ul}>
        {!loading ? <div>loading</div> : elements}
      </div>
    </>
  );
};

export default UserContainer;
