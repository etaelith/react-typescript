import "./App.css";

import Usuario from "./components/Usuario";

import TimerParent from "./components/TimerParent";
import CountRed from "./components/CountRed";
import Form from "./components/Form";
import Form2 from "./components/Form2";

function App() {
  return (
    <>
      <main>
        <div className="card">
          <h2>useState</h2>
          <hr />
          <Usuario />
        </div>
        <div className="card">
          <h2>useEffect - useRef</h2>
          <hr />
          <TimerParent />
        </div>
        <div className="card">
          <h2>useReducer</h2>
          <hr />
          <CountRed />
        </div>
        <div className="card">
          <h2>Form</h2>
          <hr />
          <Form />
        </div>
        <div className="card">
          <h2>Form2</h2>
          <hr />
          <Form2 />
        </div>
      </main>
    </>
  );
}

export default App;
