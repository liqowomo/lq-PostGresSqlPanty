/**
 * This for testing the various commands from
 * https://supabase.com/docs/reference/javascript/installing
 */

// Importing relevant shit
import {createClient} from '@supabase/supabase-js'
import {SBurl} from './config'
import {SBkey} from './config'

// Initiate supabase client
const supabase = createClient(SBurl, SBkey)

// Running ascynchronous fetch commands

async function getData() {
	try {
		const {data, error} = await supabase.from('countries').select()
		console.log(data)
	} catch (error) {
		console.log(error)
	}
}
// Execute command
getData()
