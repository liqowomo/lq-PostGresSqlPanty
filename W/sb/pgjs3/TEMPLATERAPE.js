/* 
Template for writing all functions 
Change XXX to what you want 
*/

import sql from './db.js'
import fs from 'fs'

// Constants

const good = 'outs/xxxfuncname.json'
const bad = 'outs/xxxfuncnameError.json'

// makign thet Table
async function xxxFuncname() {
	try {
		const data = await sql`
		-- Write fucking code here bastard 
        -- Eat her shit 
		
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
xxxFuncname()
