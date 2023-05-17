import { useContext } from "react";
import { useForm } from "../hooks/useForm";
import { LoginDate } from "../interfaces/interfaces";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
const SignUp = () => {
  const { handleChange, formData } = useForm<LoginDate>({
    email: "",
    password: "",
  });
  const { signIn } = useContext(AuthContext);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      signIn(formData);
    } catch (error) {
      console.error(error, 2);
    }
  };
  return (
    <>
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
        />
        <button style={{ cursor: "pointer" }}>Send</button>
      </form>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default SignUp;
