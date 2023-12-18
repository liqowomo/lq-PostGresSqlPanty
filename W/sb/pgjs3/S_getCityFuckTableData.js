/* 
Getting Data into table cityfuck

*/

import sql from './db.js'
import fs from 'fs'

// Constants

const good = 'outs/SgetcfDATA.json'
const bad = 'outs/SinsertDataError.json'

// makign thet Table
async function SinsertData() {
	try {
		const data = await sql`
		-- get data from cityfuck table
		select * from cityfuck
		
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
SinsertData()
