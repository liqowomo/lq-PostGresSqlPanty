/**
 * Tut test here - https://supabase.com/docs/reference/javascript/select
 */

// Setting up k and u
import {SBurl} from './config'
import {SBkey} from './config'
import {createClient} from '@supabase/supabase-js'

// 1 .Creating the client
const supabase = createClient(SBurl, SBkey)

//2. Write function to fetch data

async function getData() {
	const {data, error} = await supabase.from('countries').select()

	console.log(`

======================
Query results are here
=======================

`)
	console.log(data, error)
}

// Calling all the functions

// Fetch data
getData()
