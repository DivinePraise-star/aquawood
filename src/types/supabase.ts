
// Additional type definitions that might be useful beyond what's in your services

export interface Location {
  type: string;
  coordinates: number[];
}

export type DeforestationTimeSeriesData = {
  observation_date: string;
  forest_cover_percentage: number;
  deforestation_rate_percentage: number | null;
};

export type WaterQualityTimeSeriesData = {
  observation_date: string;
  ph_level: number | null;
  temperature_celsius: number | null;
  dissolved_oxygen_mg_l: number | null;
  turbidity_ntu: number | null;
};

export type ProjectStatus = 'planning' | 'active' | 'completed' | 'cancelled' | 'on hold';
export type AlertSeverity = 'low' | 'medium' | 'high' | 'critical';
export type ReportStatus = 'submitted' | 'under review' | 'resolved' | 'rejected';
export type AlertStatus = 'active' | 'resolved' | 'false alarm';
export type AlertType = 'deforestation' | 'pollution' | 'illegal activity' | 'wildlife threat' | 'other';
export type ReportType = 'deforestation' | 'pollution' | 'wildlife sighting' | 'illegal activity' | 'other';
