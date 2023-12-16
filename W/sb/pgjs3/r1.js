import sql from './db.js'
import fs from 'fs'

async function getData() {
	try {
		const data = await sql`
      select
      *
      from countries
    `

		// Code for writing to a gile
		// Write the data to a file
		fs.writeFileSync('getData.txt', JSON.stringify(data))

		console.log(data)
	} catch (error) {
		console.error('An error occurred:', error)
		fs.writeFileSync('getDataError.txt', JSON.stringify(error))
	}
	process.exit(0)
}

// Execute the code
getData()
