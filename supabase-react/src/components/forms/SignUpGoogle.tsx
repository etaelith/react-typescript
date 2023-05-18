import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import google from "@/assets/google.svg";
const SignUpGoogle = () => {
  const { signUpGoogle } = useContext(AuthContext);
  const handleLog = () => {
    signUpGoogle();
  };
  return (
    <div className="button" id="button" onClick={handleLog}>
      <img src={google} />
      <span>Sign with Google</span>
    </div>
  );
};

export default SignUpGoogle;
