import { useContext, useEffect, useState } from "react";
import {
  BillData,
  TabData,
  UserContextType,
  props,
} from "../interfaces/interfaces";
import { UserContext } from "./UserContext";
import { client } from "../supabase/client";
import { AuthContext } from "./AuthContext";

const INITIAL_STATE: UserContextType = {
  name: "etaelith",
  tabs: null,
};
const UserProvider = ({ children }: props) => {
  const { user } = useContext(AuthContext);

  const [todo, setTodo] = useState<UserContextType>(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const getTabs = async () => {
    setLoading(false);
    if (user) {
      const { error, data } = await client
        .from("bill")
        .select("*")
        .eq("user_id", user?.id);

      if (error) throw error;

      setTodo({
        name: user?.email || "Reload the interface",
        tabs: data as TabData[],
      });
    }
    setLoading(true);
  };
  const createData = async (formData: BillData) => {
    if (user) {
      try {
        const { error } = await client.from("bill").insert({
          name: formData.name,
          user_id: user?.id,
          amount: formData.amount,
        });
        if (error) {
          throw error.message;
        }
        getTabs();
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getTabs();
  }, [user]);
  return (
    <UserContext.Provider value={{ todo, createData, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
