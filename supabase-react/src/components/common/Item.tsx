import { TabData } from "../../interfaces/interfaces";
import styles from "../../styles/item.module.css";
interface ItemsProps {
  item: TabData;
}

const Item = ({ item }: ItemsProps) => {
  const time = new Date(`${item.created_at}`).toDateString();
  return (
    <div className={styles.li}>
      <div>{item.name}</div>
      <div>{item.amount}</div>
      <div>{time}</div>
      <div>{item.paid_up}</div>
    </div>
  );
};

export default Item;
