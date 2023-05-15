import { useForm } from "../hooks/useForm";

const Form2 = () => {
  const { formData, handleChange } = useForm({
    postal: "ABC",
    ciudad: "Ohio",
  });

  const { postal, ciudad } = formData;

  return (
    <form>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="postal"
          value={postal}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Name</label>
        <input type="text" name="ciudad" value={ciudad} onChange={handleChange} />
      </div>
      <pre>{JSON.stringify(formData)}</pre>
    </form>
  );
};

export default Form2;
