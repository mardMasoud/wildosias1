import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hpvlnzfuuzxwhxhehbbf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwdmxuemZ1dXp4d2h4aGVoYmJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1Nzc3ODksImV4cCI6MjAzMzE1Mzc4OX0.JWUtQol9MPrgiG7e124ZrTFMB-qrQ4ksLVC4MVZkIck";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
