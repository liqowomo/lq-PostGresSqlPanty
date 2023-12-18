/* 
Insering Data into table cityfuck

*/

import sql from './db.js'
import fs from 'fs'

// Constants

const good = 'outs/ScalcData.json'
const bad = 'outs/ScalcDataError.json'

// makign thet Table
async function ScalcData() {
	try {
		const data = await sql`
		-- Running Transforms which are calculations
		-- Make a new calculated column 
		select 
		name, population/area, name as panty
		from cityfuck
		
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
ScalcData()
