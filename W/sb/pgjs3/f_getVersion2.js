/* 
This is for getting data
*/

import sql from './db.js'
import fs from 'fs'

//declaring variables
const errorfile = 'outs/getVersionError.txt'
const outs = 'outs/getVersion.json'

// makign thet Table
async function getVersion() {
	try {
		const data = await sql`
		-- Write sql code here
		select version()
		
    `
		// Code for writing to a gile
		// Write the data to a file
		fs.writeFileSync(outs, JSON.stringify(data))

		console.log(data)
	} catch (error) {
		console.error('An error occurred:', error)
		fs.writeFileSync(errorfile, JSON.stringify(error))
	}
	process.exit(0)
}
// Execute the code
getVersion()
