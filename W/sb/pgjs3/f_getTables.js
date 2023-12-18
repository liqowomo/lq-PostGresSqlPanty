/* 
This is for getting data
*/

import sql from './db.js'
import fs from 'fs'

// Declaring constants to be used
const er = `outs/getTablesError.json`
const ou = `outs/getTables.json`

// makign thet Table
async function getTables() {
	try {
		const data = await sql`
		-- Taken from Supabase Natural queries
		select
  			table_name
		from
  			information_schema.tables
		where
  		table_schema = 'public';
		
    `

		// Code for writing to a gile
		// Write the data to a file
		fs.writeFileSync(ou, JSON.stringify(data))

		console.log(data)
	} catch (error) {
		console.error('An error occurred:', error)
		fs.writeFileSync(er, JSON.stringify(error))
	}
	process.exit(0)
}
// Execute the code
getTables()
