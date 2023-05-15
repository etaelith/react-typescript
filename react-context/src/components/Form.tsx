import { useForm } from "../hooks/useForm";
import { useTodos } from "../hooks/useTodos";
import { Todo } from "../interfaces/interfaces";
import toast, { Toaster } from "react-hot-toast";
const Form = () => {
  const { todos, addTodo } = useTodos();
  const { handleChange, formData } = useForm<Todo>({
    id: todos.length,
    desc: "",
    completed: false,
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = todos.length + 1;
    const newTodo = { ...formData, id: newId };
    addTodo(newTodo);
    notify();
  };
  const notify = () =>
    toast.success(
      `Succes Agree item {id:${todos.length + 1},description:${formData.desc}}`,
      {
        duration: 2000,
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      }
    );
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>description: </label>
          <input type="text" name="desc" onChange={handleChange} />
          <button >Add</button>
        </div>
        <pre>{JSON.stringify(formData)}</pre>
      </form>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default Form;
