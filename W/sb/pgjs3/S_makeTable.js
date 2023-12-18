/* 
This is for getting data
This is chapter 5 of course - Creating  table of smelly pussy
*/

import sql from './db.js'
import fs from 'fs'


// makign thet Table
async function getData() {
	try {
		const data = await sql`
		select * from countries
		
    `

		// Code for writing to a gile
		// Write the data to a file
		fs.writeFileSync('outs/getData.json', JSON.stringify(data))

		console.log(data)
	} catch (error) {
		console.error('An error occurred:', error)
		fs.writeFileSync('outs/getDataError.txt', JSON.stringify(error))
	}
	process.exit(0)
}
// Execute the code
getData()
