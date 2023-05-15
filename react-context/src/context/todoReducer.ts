import { Todo, TodoState } from "../interfaces/interfaces";
type TodoAction =
  | { type: "addTodo"; payload: Todo }
  | { type: "toggleTodo"; payload: { id: number } };
export const todoReducer = (
  state: TodoState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todoCount: action.payload.id,
        todos: [...state.todos, action.payload],
        pending: state.pending + 1,
      };
    case "toggleTodo":
      return {
        ...state,
        todos: state.todos.map(({ ...todo }) => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};
