import SignUp from "../components/forms/SignUp";
import SignUpOTP from "../components/forms/SignUpOtp";

const SignUpForms = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
      <SignUp />
      <SignUpOTP />
    </div>
  );
};

export default SignUpForms;
