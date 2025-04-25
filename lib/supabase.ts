import { createClient } from "@supabase/supabase-js";

// Initialize the Supabase client
const supabaseUrl =
	process.env.NEXT_PUBLIC_SUPABASE_URL ||
	"https://arvnrbrrjjxtxvnmsoqh.supabase.co";
const supabaseKey =
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFydm5yYnJyamp4dHh2bm1zb3FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1ODY5OTEsImV4cCI6MjA2MTE2Mjk5MX0.f1z3OeoxIymNdBSx4R04zXB1Gsdq4wK9ALjs2qZNzTM";

// Create a single Supabase client for the entire app
export const supabase = createClient(supabaseUrl, supabaseKey);

// Type for the meta_connections table
export type MetaConnection = {
	id?: string;
	user_id: string;
	meta_user_id: string;
	access_token: string;
	token_expiry: number;
	name?: string;
	email?: string;
	created_at?: string;
	updated_at?: string;
};
