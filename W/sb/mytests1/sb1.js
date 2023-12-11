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

// Get version of the databse
async function getPostgresVersion() {
	const {data, error} = await supabase.rpc('get_postgres_version')

	if (error) {
		console.error('Error fetching PostgreSQL version:', error)
		return
	}

	const postgresVersion = data[0].get_postgres_version
	console.log('PostgreSQL version:', postgresVersion)
}

// Execute command
getData()
// getPostgresVersion()
