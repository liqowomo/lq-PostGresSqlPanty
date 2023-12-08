/**
 * Tut test here - https://supabase.com/docs/reference/javascript/select
 *
 */

// 1 .Creating the client

import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://urlqwzlpqnxiduxiwdse.supabase.co'
const publicAnonKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVybHF3emxwcW54aWR1eGl3ZHNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwNTAyNzAsImV4cCI6MjAxNzYyNjI3MH0.EADDxPgefEY3zArH4glsswKHzgOpnPyirs1n16FCkOk'

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, publicAnonKey)
console.log(supabase)

// Now fetch data from none existing source
const {data, error} = await supabase.from('countries').select()
console.log(data, error)
