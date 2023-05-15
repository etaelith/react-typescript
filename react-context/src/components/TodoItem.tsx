import { Todo } from "../interfaces/interfaces";
import { useTodos } from "../hooks/useTodos";

interface props {
  todo: Todo;
}
const TodoItem = ({ todo }: props) => {
  const { toggleTodo } = useTodos();

  return (
    <div
      onDoubleClick={() => toggleTodo(todo.id)}
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "Line-through" : "none",
      }}
    >
      <h2>{todo.desc}</h2>
    </div>
  );
};

export default TodoItem;
