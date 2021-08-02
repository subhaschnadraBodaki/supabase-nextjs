import { createClient } from "@supabase/supabase-js";

const supabaseUrl = `https://kvlmpirwekuqxiycedrh.supabase.co`;
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNjg0NzgwMiwiZXhwIjoxOTQyNDIzODAyfQ.o06ll5GlLXjoM-GD3ojM40jl4p0vYbplNUbPYRGcLq4`;

export const supabase = createClient(supabaseUrl, supabaseKey);
