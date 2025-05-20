
import { supabase, TableRow } from '@/integrations/supabase/client';

export type MonitoredArea = TableRow<'monitored_areas'>;

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
