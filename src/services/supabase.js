import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ronvtalegjhwvtgyvvbt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvbnZ0YWxlZ2pod3Z0Z3l2dmJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE1NTIzMjgsImV4cCI6MjAzNzEyODMyOH0.BldgUqyFnfNklytGTBwSoTdInlwge8lnqU6mhHcJqT8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
