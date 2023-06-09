import { createContext } from "react";
import { Todo, TodoState } from "../interfaces/interfaces";
export type TodoContextProps = {
  todoState: TodoState;
  toggleTodo: (id: number) => void;
  addTodo: (todo: Todo) => void;
};
export const TodoContext = createContext<TodoContextProps>(
  {} as TodoContextProps
);
