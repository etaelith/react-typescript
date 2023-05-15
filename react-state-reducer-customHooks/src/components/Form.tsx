import { useForm } from "../hooks/useForm";
interface FormData {
  email: string;
  name: string;
  age: number;
}

const Form = () => {
  const { handleChange, formData } = useForm<FormData>({
    email: "",
    name: "",
    age: 25,
  });
  return (
    <form>
      <div>
        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} />
      </div>
      <div>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>
      <pre>{JSON.stringify(formData)}</pre>
    </form>
  );
};

export default Form;
