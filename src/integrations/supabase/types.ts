export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      community_reports: {
        Row: {
          area_id: string | null
          created_at: string
          description: string
          id: string
          image_url: string | null
          location: Json | null
          report_type: string
          reporter_contact: string | null
          reporter_name: string
          status: string
          submission_date: string
          updated_at: string
        }
        Insert: {
          area_id?: string | null
          created_at?: string
          description: string
          id?: string
          image_url?: string | null
          location?: Json | null
          report_type: string
          reporter_contact?: string | null
          reporter_name: string
          status: string
          submission_date?: string
          updated_at?: string
        }
        Update: {
          area_id?: string | null
          created_at?: string
          description?: string
          id?: string
          image_url?: string | null
          location?: Json | null
          report_type?: string
          reporter_contact?: string | null
          reporter_name?: string
          status?: string
          submission_date?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "community_reports_area_id_fkey"
            columns: ["area_id"]
            isOneToOne: false
            referencedRelation: "monitored_areas"
            referencedColumns: ["id"]
          },
        ]
      }
      conservation_projects: {
        Row: {
          area_id: string | null
          budget: number | null
          created_at: string
          description: string
          end_date: string | null
          id: string
          impact_summary: string | null
          name: string
          start_date: string
          status: string
          updated_at: string
        }
        Insert: {
          area_id?: string | null
          budget?: number | null
          created_at?: string
          description: string
          end_date?: string | null
          id?: string
          impact_summary?: string | null
          name: string
          start_date: string
          status: string
          updated_at?: string
        }
        Update: {
          area_id?: string | null
          budget?: number | null
          created_at?: string
          description?: string
          end_date?: string | null
          id?: string
          impact_summary?: string | null
          name?: string
          start_date?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "conservation_projects_area_id_fkey"
            columns: ["area_id"]
            isOneToOne: false
            referencedRelation: "monitored_areas"
            referencedColumns: ["id"]
          },
        ]
      }
      deforestation_data: {
        Row: {
          area_id: string
          created_at: string
          deforestation_rate_percentage: number | null
          forest_cover_percentage: number
          id: string
          notes: string | null
          observation_date: string
          satellite_imagery_url: string | null
          updated_at: string
        }
        Insert: {
          area_id: string
          created_at?: string
          deforestation_rate_percentage?: number | null
          forest_cover_percentage: number
          id?: string
          notes?: string | null
          observation_date: string
          satellite_imagery_url?: string | null
          updated_at?: string
        }
        Update: {
          area_id?: string
          created_at?: string
          deforestation_rate_percentage?: number | null
          forest_cover_percentage?: number
          id?: string
          notes?: string | null
          observation_date?: string
          satellite_imagery_url?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "deforestation_data_area_id_fkey"
            columns: ["area_id"]
            isOneToOne: false
            referencedRelation: "monitored_areas"
            referencedColumns: ["id"]
          },
        ]
      }
      environmental_alerts: {
        Row: {
          alert_type: string
          area_id: string
          created_at: string
          description: string
          id: string
          reported_date: string
          resolved_date: string | null
          severity: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          alert_type: string
          area_id: string
          created_at?: string
          description: string
          id?: string
          reported_date?: string
          resolved_date?: string | null
          severity: string
          status: string
          title: string
          updated_at?: string
        }
        Update: {
          alert_type?: string
          area_id?: string
          created_at?: string
          description?: string
          id?: string
          reported_date?: string
          resolved_date?: string | null
          severity?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "environmental_alerts_area_id_fkey"
            columns: ["area_id"]
            isOneToOne: false
            referencedRelation: "monitored_areas"
            referencedColumns: ["id"]
          },
        ]
      }
      monitored_areas: {
        Row: {
          area_size_hectares: number | null
          created_at: string
          description: string | null
          id: string
          location: Json | null
          name: string
          updated_at: string
        }
        Insert: {
          area_size_hectares?: number | null
          created_at?: string
          description?: string | null
          id?: string
          location?: Json | null
          name: string
          updated_at?: string
        }
        Update: {
          area_size_hectares?: number | null
          created_at?: string
          description?: string | null
          id?: string
          location?: Json | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          first_name: string | null
          id: string
          last_name: string | null
          organization: string | null
          role: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          organization?: string | null
          role?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          organization?: string | null
          role?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      water_quality_data: {
        Row: {
          area_id: string
          created_at: string
          dissolved_oxygen_mg_l: number | null
          id: string
          notes: string | null
          observation_date: string
          ph_level: number | null
          pollution_level: string | null
          temperature_celsius: number | null
          turbidity_ntu: number | null
          updated_at: string
          water_body_name: string
        }
        Insert: {
          area_id: string
          created_at?: string
          dissolved_oxygen_mg_l?: number | null
          id?: string
          notes?: string | null
          observation_date: string
          ph_level?: number | null
          pollution_level?: string | null
          temperature_celsius?: number | null
          turbidity_ntu?: number | null
          updated_at?: string
          water_body_name: string
        }
        Update: {
          area_id?: string
          created_at?: string
          dissolved_oxygen_mg_l?: number | null
          id?: string
          notes?: string | null
          observation_date?: string
          ph_level?: number | null
          pollution_level?: string | null
          temperature_celsius?: number | null
          turbidity_ntu?: number | null
          updated_at?: string
          water_body_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "water_quality_data_area_id_fkey"
            columns: ["area_id"]
            isOneToOne: false
            referencedRelation: "monitored_areas"
            referencedColumns: ["id"]
          },
        ]
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
