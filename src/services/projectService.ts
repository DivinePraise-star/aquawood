
import { supabase } from '@/integrations/supabase/client';

export interface ConservationProject {
  id: string;
  name: string;
  description: string;
  area_id: string | null;
  start_date: string;
  end_date: string | null;
  budget: number | null;
  status: string;
  impact_summary: string | null;
  created_at: string;
  updated_at: string;
}

export const getConservationProjects = async (): Promise<ConservationProject[]> => {
  const { data, error } = await supabase
    .from('conservation_projects')
    .select('*')
    .order('start_date', { ascending: false });

  if (error) {
    console.error('Error fetching conservation projects:', error);
    throw new Error('Failed to fetch conservation projects');
  }

  return data || [];
};

export const getProjectById = async (id: string): Promise<ConservationProject | null> => {
  const { data, error } = await supabase
    .from('conservation_projects')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Error fetching project with ID ${id}:`, error);
    throw new Error(`Failed to fetch project with ID ${id}`);
  }

  return data;
};
