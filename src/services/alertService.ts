
import { supabase, TableRow } from '@/integrations/supabase/client';

export type EnvironmentalAlert = TableRow<'environmental_alerts'>;

export const getEnvironmentalAlerts = async (): Promise<EnvironmentalAlert[]> => {
  const { data, error } = await supabase
    .from('environmental_alerts')
    .select('*')
    .order('reported_date', { ascending: false });

  if (error) {
    console.error('Error fetching environmental alerts:', error);
    throw new Error('Failed to fetch environmental alerts');
  }

  return data || [];
};

export const getActiveAlerts = async (): Promise<EnvironmentalAlert[]> => {
  const { data, error } = await supabase
    .from('environmental_alerts')
    .select('*')
    .eq('status', 'active')
    .order('reported_date', { ascending: false });

  if (error) {
    console.error('Error fetching active environmental alerts:', error);
    throw new Error('Failed to fetch active environmental alerts');
  }

  return data || [];
};
