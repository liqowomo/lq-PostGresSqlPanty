/* 
Template for writing all functions 
Change XXX to what you want 
*/

import sql from './db.js'
import fs from 'fs'

// Constants

const good = 'outs/SmakeTable.json'
const bad = 'outs/SmakeTableError.json'

// makign thet Table
async function SmakeTable() {
	try {
		const data = await sql`
		-- Create table form cursapanty
		create table cityfuck(
			name varchar(60),
			country varchar(60),
			population integer,
			area integer
		)	
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
SmakeTable()