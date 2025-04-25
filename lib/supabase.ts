import { createClient } from "@supabase/supabase-js";

// Initialize the Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

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
