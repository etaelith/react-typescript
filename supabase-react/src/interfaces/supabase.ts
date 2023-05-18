export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      bill: {
        Row: {
          amount: number
          created_at: string | null
          id: number
          name: string
          paid_up: boolean
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          id?: number
          name: string
          paid_up?: boolean
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          id?: number
          name?: string
          paid_up?: boolean
          user_id?: string
        }
      }
      user_money: {
        Row: {
          created_at: string | null
          id: number
          pay_out: number
          total: number
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          pay_out?: number
          total?: number
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: number
          pay_out?: number
          total?: number
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
