
import { supabase } from '@/integrations/supabase/client';

export interface WaterQualityData {
  id: string;
  area_id: string;
  water_body_name: string;
  observation_date: string;
  ph_level: number | null;
  temperature_celsius: number | null;
  dissolved_oxygen_mg_l: number | null;
  turbidity_ntu: number | null;
  pollution_level: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export const getWaterQualityData = async (): Promise<WaterQualityData[]> => {
  const { data, error } = await supabase
    .from('water_quality_data')
    .select('*')
    .order('observation_date', { ascending: false });

  if (error) {
    console.error('Error fetching water quality data:', error);
    throw new Error('Failed to fetch water quality data');
  }

  return data || [];
};

export const getWaterQualityByAreaId = async (areaId: string): Promise<WaterQualityData[]> => {
  const { data, error } = await supabase
    .from('water_quality_data')
    .select('*')
    .eq('area_id', areaId)
    .order('observation_date', { ascending: false });

  if (error) {
    console.error(`Error fetching water quality data for area ${areaId}:`, error);
    throw new Error(`Failed to fetch water quality data for area ${areaId}`);
  }

  return data || [];
};
