import "./App.css";
import Header from "@/components/common/Header";
import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

import Login from "@/pages/Login";
import SignUpForms from "@/pages/SignUpForms";
import UserProvider from "@/context/UserProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="user/">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUpForms />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </UserProvider>
    </>
  );
}

export default App;
