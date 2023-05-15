import { useTodos } from "../hooks/useTodos";

const PendingTodos = () => {
  const { pendingTodos } = useTodos();
  return (
    <>
      <h3>Pendings: {pendingTodos.length}</h3>
    </>
  );
};

export default PendingTodos;
