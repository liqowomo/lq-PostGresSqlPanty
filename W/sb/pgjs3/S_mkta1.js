/* 
Template for writing all functions 
Making table with primary keys
*/

import sql from './db.js'
import fs from 'fs'

// Constants

const good = 'outs/mkTa1.json'
const bad = 'outs/mkTa1Error.json'

// makign thet Table
async function mkTa1() {
	try {
		const data = await sql`
		-- Make table with prinmary key 
        CREATE TABLE scatqueens(
			id SERIAL PRIMARY KEY,
			dom VARCHAR(100)
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
mkTa1()
