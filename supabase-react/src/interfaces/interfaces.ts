import { Session, User } from "@supabase/supabase-js";
export interface LoginDate {
  email: string;
  password: string;
}
export interface BillData {
  name: string;
  amount: number;
}
export interface AuthUser {
  user: User | null;
  session: Session | null;
}
export interface AuthContextType extends AuthUser {
  signIn: (date: LoginDate) => void;
  signUp: (date: LoginDate) => void;
  signOut: () => void;
}
export interface TabData extends BillData {
  created_at: string;
  paid_up: boolean;
  id: number;
  user_id: string;
}
export interface UserContextType {
  name: string;
  tabs: TabData[] | null;
}
export type UserContextProps = {
  todo: UserContextType;
  createData: (todo: BillData) => void;
  loading: boolean;
};
export interface props {
  children: JSX.Element | JSX.Element[];
}
