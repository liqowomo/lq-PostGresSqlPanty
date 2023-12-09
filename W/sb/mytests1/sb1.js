/**
 * Testing fucntions from  docs
 * https://supabase.com/docs/reference/javascript/select
 */
// Setting up the libraries
import {createClient} from '@supabase/supabase-js'
import {SBkey} from './config'
import {SBurl} from './config'
const fs = require('fs') // Required for writing to file

// Creating cliesn
const supabase = createClient(SBurl, SBkey)

// Writing to file function 
async function writeToFile(dataWrite) {
	try {
		await fs.promises.writeFile('output.json', dataWrite)
		console.log('Data written to file successfully')
	} catch (error) {
		console.error('Error writing to file:', error)
	}
}

//  Fetching data functions
async function getData() {
	const {data, error} = await supabase.from('countries').select()
	if (error) {
		console.log('Error fetching data:', error)
	} else {
		const dataWrite = JSON.stringify(data) // Stringify the data
		writeToFile(dataWrite) // Writing function being called here
		console.log('Data:', data)
	}
}

// Inserting data function
async function insertData() {
	const {data, error} = await supabase
		.from('countries')
		.insert({id: 5, name: 'Bona'})
	if (error) {
		console.log('Error fetching data:', error)
	} else {
		console.log('Data:', data)
	}
}

// Run Function
// getData()
insertData()
