/**
 * Tut test here - https://supabase.com/docs/reference/javascript/select
 * Test 1
 */

// Setting up k and u
import {SBurl} from './config'
import {SBkey} from './config'
import {createClient} from '@supabase/supabase-js'

// 1 .Creating the client
const supabase = createClient(SBurl, SBkey)

/**
 * Write the function for fetching data , note
 * we are using the async function to prevent blocking of other
 * functions. Seems to be best practice
 */
//2. Write function to fetch data

async function getData() {
	const {data, error} = await supabase.from('countries').select()
	if (error) {
		console.log(`Data Fetching error`, error)
	}
	console.log(data)
}

// C

// Fetch data
getData()
