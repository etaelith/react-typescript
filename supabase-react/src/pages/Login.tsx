import { NavLink } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { LoginDate } from "../interfaces/interfaces";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { handleChange, formData } = useForm<LoginDate>({
    email: "",
    password: "",
  });
  const { signIn } = useContext(AuthContext);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(formData);
    } catch (error) {
      console.error(error, 2);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NavLink
        to="/user/signup"
        className="btn"
        style={{ margin: "1em", maxWidth: "5em" }}
      >
        SignUp
      </NavLink>
      <br />
      or
      <br />
      LogIn
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="test@test.com"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="123@%$123"
          onChange={handleChange}
          autoComplete="on"
        />
        <button style={{ cursor: "pointer" }}>Send</button>
      </form>
    </div>
  );
};

export default Login;
