import { AuthContext } from "./AuthContext";
import { AuthUser, Login, LoginDate, props } from "@/interfaces/interfaces";
import { useEffect, useState } from "react";
import { client } from "@/supabase/client";
import { useLocation, useNavigate } from "react-router-dom";
import useToast from "@/hooks/useToast";

const INITIAL_STATE: AuthUser = {
  user: null,
  session: null,
};
const AuthProvider = ({ children }: props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const notify = useToast();
  const [user, setUser] = useState<AuthUser>(INITIAL_STATE);

  const signMagicClick = async (formData: Login) => {
    const { error } = await client.auth.signInWithOtp({
      email: formData.email,
    });
    if (error) {
      throw notify(error.message, "error");
    }
  };
  const signUpGoogle = async () => {
    const { error } = await client.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      throw notify(error.message, "error");
    }
  };

  const signIn = async (formData: LoginDate) => {
    const { error } = await client.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });
    if (error) {
      throw notify(error.message, "error");
    }

    navigate("/");
    notify("Login success", "success");
  };
  const signOut = () => {
    client.auth.signOut();
    navigate("/user/login");
    notify("Success logout", "info");
  };

  useEffect(() => {
    client.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        if (location.pathname === "/") {
          setUser(INITIAL_STATE);
          navigate("/user/login");
        }
      } else {
        setUser({
          user: session.user,
          session: session,
        });
        navigate("/");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);
  return (
    <AuthContext.Provider
      value={{
        user: user.user,
        session: user.session,
        signIn,
        signOut,
        signMagicClick,
        signUpGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
