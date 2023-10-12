import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zaulrwoluofalhekavgr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphdWxyd29sdW9mYWxoZWthdmdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5OTY5MDcsImV4cCI6MjAxMjU3MjkwN30.zAYshlr54OnNiS3QJJFCKUEIC1NTKjyRBqZMlD5-ovk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
