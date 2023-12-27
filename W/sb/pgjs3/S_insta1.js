/* 
Template for writing all functions 
Making table with primary keys
*/

import sql from './db.js'
import fs from 'fs'

// Constants

const good = 'outs/insTa1.json'
const bad = 'outs/insTa1Error.json'

// makign thet Table
async function insTa1() {
	try {
		const data = await sql`
		-- Insert Names 
        INSERT INTO scatqueens (dom) 
		VALUES 
		('fjord'), ('island'), ('forest'), ('mountain'), ('sea'), ('beach'), ('river'), ('lake'), ('desert'), ('ocean')
		
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
insTa1()
