import { useContext } from "react";
import { useForm } from "@/hooks/useForm";
import { AuthContext } from "@/context/AuthContext";
import { Login } from "@/interfaces/interfaces";

const SignUpOTP = () => {
  const { handleChange, formData } = useForm<Login>({
    email: "",
  });
  const { signMagicClick } = useContext(AuthContext);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      signMagicClick(formData);
    } catch (error) {
      console.error(error, 2);
    }
  };
  return (
    <>
      <h3>Sign In with OTP</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="test@test.com"
          onChange={handleChange}
        />

        <button style={{ cursor: "pointer" }}>Send</button>
      </form>
    </>
  );
};

export default SignUpOTP;
