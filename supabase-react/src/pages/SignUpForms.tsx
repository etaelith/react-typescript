import SignUp from "@/components/forms/SignUp";
import SignUpGoogle from "@/components/forms/SignUpGoogle";
import SignUpOTP from "@/components/forms/SignUpOtp";
import AuthContainer from "@/container/AuthContainer";

const SignUpForms = () => {
  return (
    <AuthContainer>
      <SignUp />
      <SignUpOTP />
      <SignUpGoogle />
    </AuthContainer>
  );
};

export default SignUpForms;
