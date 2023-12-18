/* 
Template for writing all functions 
Change XXX to what you want 
*/

import sql from './db.js'
import fs from 'fs'

// Constants

const good = 'outs/SgetTable.json'
const bad = 'outs/SgetTableError.json'

// makign thet Table
async function SgetTable() {
	try {
		const data = await sql`
		-- Create table form cursapanty
		-- Taken from Supabase Natural queries
		select
  			table_name
		from
  			information_schema.tables
		where
  		table_schema = 'public'
    `

		// Code for writing to a gile
		// Write the data to a file
		fs.writeFileSync(good, JSON.stringify(data))

		console.log(data)
	} catch (error) {
		console.error('FuckYouBastard:', error)
		fs.writeFileSync('outs/getDataError.txt', JSON.stringify(error))
	}
	process.exit(0)
}
// Execute the code
SgetTable()
