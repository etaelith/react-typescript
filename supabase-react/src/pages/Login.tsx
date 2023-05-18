import { NavLink } from "react-router-dom";

import AuthContainer from "@/container/AuthContainer";
import SignIn from "@/components/forms/SignIn";
const Login = () => {
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
      or
      <br />
      <AuthContainer>
        <SignIn />
      </AuthContainer>
    </div>
  );
};

export default Login;
