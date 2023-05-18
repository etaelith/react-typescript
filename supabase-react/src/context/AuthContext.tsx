import { createContext } from "react";
import { AuthContextType } from "@/interfaces/interfaces";

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
