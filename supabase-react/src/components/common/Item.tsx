import { TabData } from "@/interfaces/interfaces.ts";
import styles from "@/styles/item.module.css";
import deleteIcon from "@/assets/delete.svg";
import rotateIcon from "@/assets/rotate.svg";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext.tsx";
interface ItemsProps {
  item: TabData;
}

const Item = ({ item }: ItemsProps) => {
  const time = new Date(`${item.created_at}`).toLocaleDateString();
  const { deleteData, changeState } = useContext(UserContext);
  return (
    <div className={styles.li}>
      <div className={styles.dates}>
        <span>{item.name}</span>
        <span>{item.amount}</span>
        <span>{time}</span>
        <div>{String(item.paid_up)}</div>
      </div>
      <div className={styles.divimg}>
        <img
          src={rotateIcon}
          className={styles.img}
          onClick={() => changeState(item.id, item.paid_up)}
        />
        <img
          className={styles.img}
          src={deleteIcon}
          onClick={() => deleteData(item.id)}
        />
      </div>
    </div>
  );
};

export default Item;
