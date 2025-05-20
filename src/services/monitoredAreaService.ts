
import { supabase } from '@/integrations/supabase/client';

export interface MonitoredArea {
  id: string;
  name: string;
  description: string | null;
  area_size_hectares: number | null;
  location: any | null;
  created_at: string;
  updated_at: string;
}

export const getMonitoredAreas = async (): Promise<MonitoredArea[]> => {
  const { data, error } = await supabase
    .from('monitored_areas')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching monitored areas:', error);
    throw new Error('Failed to fetch monitored areas');
  }

  return data || [];
};

export const getMonitoredAreaById = async (id: string): Promise<MonitoredArea | null> => {
  const { data, error } = await supabase
    .from('monitored_areas')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Error fetching monitored area with ID ${id}:`, error);
    throw new Error(`Failed to fetch monitored area with ID ${id}`);
  }

  return data;
};
