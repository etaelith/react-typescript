import { createContext } from "react";
import { UserContextProps } from "@/interfaces/interfaces";

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);
