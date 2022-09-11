import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
export const supabase = createClient('https://ytyzirplprsyoxvxaztk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0eXppcnBscHJzeW94dnhhenRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkwMTg1MDgsImV4cCI6MTk3NDU5NDUwOH0.9drmIFegomiDPGLa7YAEAWkPQ2Mi5fwtXTspL_tNZ_U')