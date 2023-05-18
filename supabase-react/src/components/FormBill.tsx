import styles from "@/styles/formBill.module.css";
import { useForm } from "@/hooks/useForm";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import { BillData } from "@/interfaces/interfaces";

const FormBill = () => {
  const { formData, handleChange } = useForm<BillData>({
    name: null,
    amount: null,
  });
  const { createData } = useContext(UserContext);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await createData(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.input}>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>
      <div className={styles.input}>
        <label>Amount $:</label>
        <input
          type="number"
          name="amount"
          step="0.01"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputCheck}>
        <label>Payed:</label>
        <h4> Default in false</h4>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default FormBill;
