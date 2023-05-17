import { AuthContext } from "./AuthContext";
import { AuthUser, LoginDate, props } from "../interfaces/interfaces";
import { useEffect, useState } from "react";
import { client } from "../supabase/client";
import { useNavigate } from "react-router-dom";
const INITIAL_STATE: AuthUser = {
  user: null,
  session: null,
};
const AuthProvider = ({ children }: props) => {
  const navigate = useNavigate();
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
  };
  const signIn = async (formData: LoginDate) => {
    const { data, error } = await client.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });
    if (error) {
      throw error;
    }
    setUser({
      user: data.user,
      session: data.session,
    });
    navigate("/");
  };
  const signOut = () => {
    client.auth.signOut();
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
