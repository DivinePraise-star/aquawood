
import { supabase, TableRow } from '@/integrations/supabase/client';

export type DeforestationData = TableRow<'deforestation_data'>;

export const getDeforestationData = async (): Promise<DeforestationData[]> => {
  const { data, error } = await supabase
    .from('deforestation_data')
    .select('*')
    .order('observation_date', { ascending: false });

  if (error) {
    console.error('Error fetching deforestation data:', error);
    throw new Error('Failed to fetch deforestation data');
  }

  return data || [];
};

export const getDeforestationByAreaId = async (areaId: string): Promise<DeforestationData[]> => {
  const { data, error } = await supabase
    .from('deforestation_data')
    .select('*')
    .eq('area_id', areaId)
    .order('observation_date', { ascending: false });

  if (error) {
    console.error(`Error fetching deforestation data for area ${areaId}:`, error);
    throw new Error(`Failed to fetch deforestation data for area ${areaId}`);
  }

  return data || [];
};
