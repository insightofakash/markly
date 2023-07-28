import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://slqzquqrlzwqdnriltev.supabase.co";
const supabaseClientKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNscXpxdXFybHp3cWRucmlsdGV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyMTAwOTcsImV4cCI6MjAwNTc4NjA5N30.K2i2omCMH9MXfzEtmZl3yjyBtO-SrNKViPb7SpwISAU";

const supabase = createClient(supabaseUrl, supabaseClientKey);

export default supabase;
