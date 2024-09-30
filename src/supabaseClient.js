// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// export const supabase = createClient(supabaseUrl, supabaseAnonKey)



import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://moucvburqddmtxjvjdkx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vdWN2YnVycWRkbXR4anZqZGt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxODUzMzQsImV4cCI6MjA0Mjc2MTMzNH0.XSAdCbiB6kad9B-QbiTM3C-GGBVegApi9tf2y1ITv2A';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);