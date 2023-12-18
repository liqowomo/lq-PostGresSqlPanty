/* 
This is for getting data
*/

import sql from './db.js'
import fs from 'fs'

// makign thet Table
async function getVersion() {
	try {
		const data = await sql`
		select version()
		
    `

		// Code for writing to a gile
		// Write the data to a file
		fs.writeFileSync('outs/getVersion.json', JSON.stringify(data))

		console.log(data)
	} catch (error) {
		console.error('An error occurred:', error)
		fs.writeFileSync('outs/getVersionError.txt', JSON.stringify(error))
	}
	process.exit(0)
}
// Execute the code
getVersion()
