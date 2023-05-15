import IndexMenu from "../components/IndexMenu";
import TodoProvider from "../context/TodoProvider";

const Home = () => {
  return (
    <>
      <TodoProvider>
        <IndexMenu />
      </TodoProvider>
    </>
  );
};

export default Home;
