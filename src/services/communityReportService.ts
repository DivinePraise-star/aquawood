
import { supabase } from '@/integrations/supabase/client';

export interface CommunityReport {
  id: string;
  reporter_name: string;
  reporter_contact: string | null;
  description: string;
  report_type: string;
  location: any | null;
  area_id: string | null;
  image_url: string | null;
  submission_date: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export const getCommunityReports = async (): Promise<CommunityReport[]> => {
  const { data, error } = await supabase
    .from('community_reports')
    .select('*')
    .order('submission_date', { ascending: false });

  if (error) {
    console.error('Error fetching community reports:', error);
    throw new Error('Failed to fetch community reports');
  }

  return data || [];
};

export const submitCommunityReport = async (
  report: Omit<CommunityReport, 'id' | 'created_at' | 'updated_at'>
): Promise<CommunityReport> => {
  const { data, error } = await supabase
    .from('community_reports')
    .insert([report])
    .select()
    .single();

  if (error) {
    console.error('Error submitting community report:', error);
    throw new Error('Failed to submit community report');
  }

  return data;
};
