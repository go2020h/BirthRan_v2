export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      rankings: {
        Row: {
          id: number
          date: string
          rank: number
          name: string
          song: string
          created_at: string
        }
        Insert: {
          id?: number
          date: string
          rank: number
          name: string
          song: string
          created_at?: string
        }
        Update: {
          id?: number
          date?: string
          rank?: number
          name?: string
          song?: string
          created_at?: string
        }
      }
    }
  }
}
