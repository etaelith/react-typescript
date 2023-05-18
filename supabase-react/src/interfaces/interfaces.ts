import { Session, User } from "@supabase/supabase-js";
import type { ChartData } from "chart.js";
export interface Login {
  email: string;
}
export interface LoginDate extends Login {
  password: string;
}
export interface BillData {
  name: string | null;
  amount: number | null;
}
export interface AuthUser {
  user: User | null;
  session: Session | null;
}
export interface AuthContextType extends AuthUser {
  signIn: (date: LoginDate) => void;
  signOut: () => void;
  signMagicClick: (date: Login) => void;
  signUpGoogle: () => void;
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
  total: number;
  pay_out: number;
}
export type UserContextProps = {
  todo: UserContextType;
  createData: (todo: BillData) => void;
  loading: boolean;
  deleteData: (todo: number) => void;
  changeState: (id: number, paid_up: boolean) => void;
};
export interface props {
  children: JSX.Element | JSX.Element[];
}
export interface AuthContainerProps {
  children: React.ReactNode;
}
export interface PieChartProps {
  chartData: ChartData<"doughnut">;
}
