import { useReducer } from "react";
import { initialState, countReducer } from "../hooks/useReducer";
const CountRed = () => {
  const [{ count }, dispatch] = useReducer(countReducer, initialState);
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: "add" })}>+1</button>
      <button onClick={() => dispatch({ type: "substract" })}>-1</button>
      <button onClick={() => dispatch({ type: "multiply" })}>x2</button>
      <button onClick={() => dispatch({ type: "divider" })}>/2</button>
      <button onClick={() => dispatch({ type: "custom", payload: 100 })}>
        100
      </button>
    </>
  );
};

export default CountRed;
