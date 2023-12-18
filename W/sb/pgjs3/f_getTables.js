/* 
This is for getting data
*/

import sql from './db.js'
import fs from 'fs'

// makign thet Table
async function getTables() {
	try {
		const data = await sql`
		show tables
		
    `

		// Code for writing to a gile
		// Write the data to a file
		fs.writeFileSync('outs/getTables.json', JSON.stringify(data))

		console.log(data)
	} catch (error) {
		console.error('An error occurred:', error)
		fs.writeFileSync('outs/getTablesError.txt', JSON.stringify(error))
	}
	process.exit(0)
}
// Execute the code
getTables()
