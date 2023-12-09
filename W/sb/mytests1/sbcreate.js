/**
 * This js is for creating an acutal sql database
 */

// Imports
import {SBurl} from './config'
import {SBkey} from './config'
import {createClient} from '@supabase/supabase-js'

// Creating the client
const supabase = createClient(SBurl, SBkey)

// Creating the tables
async function createCountriesTable() {
	const {data, error} = await supabase.rpc('create_table', {
		table_name: 'countries',
		schema: `
		id int8 PRIMARY KEY,
		name text
	  `,
	})

	if (error) {
		console.log('Error creating countries table:', error)
	} else {
		console.log('Countries table created successfully')
	}
}

// Insert data into the table
async function insertCountriesData() {
	const {data, error} = await supabase.rpc('insert_data', {
		table_name: 'countries',
		data: [
			{id: 1, name: 'Afghanistan'},
			{id: 2, name: 'Albania'},
			{id: 3, name: 'Algeria'},
		],
	})

	if (error) {
		console.log('Error inserting countries data:', error)
	} else {
		console.log('Countries data inserted successfully')
	}
}

// Execute the functions
createCountriesTable()
