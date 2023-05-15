import { useState } from "react";
interface User {
  uuid4: string;
  name: string;
}
const Usuario = () => {
  const [user, setUser] = useState<User>();
  const login = () => {
    setUser({
      uuid4: "123052",
      name: "Eta Test",
    });
  };
  return (
    <div>
      <h3>Usuario: {`${user?.name}`}</h3>
      <button  onClick={login}>
        Login
      </button>
      <div>{JSON.stringify(user)}</div>
    </div>
  );
};

export default Usuario;
