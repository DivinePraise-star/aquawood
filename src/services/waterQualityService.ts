
import { supabase, TableRow } from '@/integrations/supabase/client';

export type WaterQualityData = TableRow<'water_quality_data'>;

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
