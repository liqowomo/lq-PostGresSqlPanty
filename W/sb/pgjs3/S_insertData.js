/* 
Insering Data into table cityfuck

*/

import sql from './db.js'
import fs from 'fs'

// Constants

const good = 'outs/SinsertData.json'
const bad = 'outs/SinsertDataError.json'

// makign thet Table
async function SinsertData() {
	try {
		const data = await sql`
		-- Create table form cursapanty
		INSERT INTO cityfuck(name, country, population, area)
		VALUES ('Berlin', 'Germany', 3560000, 891),
			('Prague', 'Czech Republic', 1160000, 124),
			('Moscow', 'Russia', 1260000, 115),
			('New York', 'United States', 8400000, 544),
			('San Francisco', 'United States', 880000, 511),
			('London', 'United Kingdom', 8900000, 111)
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
