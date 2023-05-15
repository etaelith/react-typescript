import { useState } from "react";
import Timer from "./Timer";

const TimerParent = () => {
  const [miliseconds, setMiliseconds] = useState<number>(1000);

  return (
    <>
      <span>Miliseconds {1000}</span> <Timer miliseconds={miliseconds} />
      <br />
      <button onClick={() => setMiliseconds(1000)} value={1000}>
        1000
      </button>
      <button onClick={() => setMiliseconds(2500)}>2500</button>
      <button onClick={() => setMiliseconds(5000)}>5000</button>
    </>
  );
};

export default TimerParent;
