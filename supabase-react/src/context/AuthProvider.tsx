import { AuthContext } from "./AuthContext";
import { AuthUser, Login, LoginDate, props } from "../interfaces/interfaces";
import { useEffect, useState } from "react";
import { client } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import useToast from "../hooks/useToast";

const INITIAL_STATE: AuthUser = {
  user: null,
  session: null,
};
const AuthProvider = ({ children }: props) => {
  const navigate = useNavigate();
  const notify = useToast();
  const [user, setUser] = useState<AuthUser>(INITIAL_STATE);
  const signUp = async (formData: LoginDate) => {
    const { data, error } = await client.auth.signUp({
      email: formData.email,
      password: formData.password,
    });
    if (error) throw error;
    setUser({
      user: data.user,
      session: data.session,
    });
    notify("registed completed", "success");
  };
  const signMagicClick = async (formData: Login) => {
    const { data, error } = await client.auth.signInWithOtp({
      email: formData.email,
    });
    if (error) {
      throw notify(error.message, "error");
    }
    setUser({
      user: data.user,
      session: data.session,
    });
  };
  const signIn = async (formData: LoginDate) => {
    const { data, error } = await client.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });
    if (error) {
      throw notify(error.message, "error");
    }
    setUser({
      user: data.user,
      session: data.session,
    });
    navigate("/");
    notify("Login success", "success");
  };
  const signOut = () => {
    client.auth.signOut();
    notify("Success logout", "info");
  };
  useEffect(() => {
    client.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        console.log("not session");
        setUser(INITIAL_STATE);
      } else {
        setUser({
          user: session.user,
          session: session,
        });
      }
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user: user.user,
        session: user.session,
        signIn,
        signUp,
        signOut,
        signMagicClick,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
