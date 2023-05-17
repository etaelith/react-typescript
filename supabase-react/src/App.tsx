import "./App.css";
import Header from "./components/Header";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { client } from "./supabase/client";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserProvider from "./context/UserProvider";

function App() {
  const location = useLocation()
  const navigate = useNavigate();
  useEffect(() => {
    client.auth.onAuthStateChange((_event, session) => {
      if (!session ) {
        if(location.pathname === '/')
        navigate("/user/login");
      } else {
        navigate("/");
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);
  return (
    <>
      <Header />
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="user/">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </UserProvider>

    </>
  );
}

export default App;
