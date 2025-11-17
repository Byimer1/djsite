import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type GalleryPhoto = {
  id: string;
  image_url: string;
  caption: string;
  event_type: string;
  display_order: number;
  created_at: string;
};
