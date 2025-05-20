
import { supabase } from '@/integrations/supabase/client';

export interface Profile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  organization: string | null;
  role: string | null;
  created_at: string;
  updated_at: string;
}

export const getProfiles = async (): Promise<Profile[]> => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*');

  if (error) {
    console.error('Error fetching profiles:', error);
    throw new Error('Failed to fetch profiles');
  }

  return data || [];
};

export const getProfileById = async (id: string): Promise<Profile | null> => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Error fetching profile with ID ${id}:`, error);
    throw new Error(`Failed to fetch profile with ID ${id}`);
  }

  return data;
};

export const updateProfile = async (id: string, updates: Partial<Profile>): Promise<Profile> => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(`Error updating profile with ID ${id}:`, error);
    throw new Error(`Failed to update profile with ID ${id}`);
  }

  return data;
};
