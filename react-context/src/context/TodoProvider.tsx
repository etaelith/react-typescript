import { useReducer } from "react";
import { Todo, TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    { id: 1, desc: "This is a description", completed: false },
    { id: 2, desc: "This is a description 2", completed: false },
  ],
  completed: 0,
  pending: 2,
};
interface props {
  children: JSX.Element | JSX.Element[];
}
const TodoProvider = ({ children }: props) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);
  const toggleTodo = (id: number) => {
    dispatch({ type: "toggleTodo", payload: { id } });
  };
  const addTodo = (todo: Todo) => {
    dispatch({ type: "addTodo", payload: todo });
  };
  return (
    <TodoContext.Provider value={{ todoState, toggleTodo, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
