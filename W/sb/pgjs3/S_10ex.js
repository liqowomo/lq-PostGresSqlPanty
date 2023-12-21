/* 
Template for writing all functions 
Ch10 -Excercise
*/

import sql from './db.js'
import fs from 'fs'

// Constants

// const good = 'outs/maTa.json'
// const bad = 'outs/maTaError.json'

// // makign thet Table
// async function maTa() {
// 	try {
// 		const data = await sql`
// 		-- Creating a table first wiht this code
// 		create table phones (
// 			name varchar(50),
// 			manufacturer varchar(50),
// 			price integer,
// 			units_sold integer
// 		)

//     `

// 		// Code for writing to a gile
// 		// Write the data to a file
// 		fs.writeFileSync(good, JSON.stringify(data))

// 		console.log(data)
// 	} catch (error) {
// 		console.error('FuckYouBastard:', error)
// 		fs.writeFileSync(bad, JSON.stringify(error))
// 	}
// 	process.exit(0)
// }
// // Execute the code
// maTa()

//---------------------------------------------------------------------------------------

//Insering data
// now code for creating  transforms

// const good2 = 'outs/inTa.json'
// const bad2 = 'outs/inTaError.json'

// // makign thet Table
// async function inTa() {
// 	try {
// 		const data = await sql`
// 		-- Inserting rows into the table
// 		INSERT INTO phones (name, manufacturer, price, units_sold)
// 		VALUES
// 			('n1280', 'Nokia', 199, 1925),
// 			('Iphone 4', 'Apple', 399, 9436),
// 			('Galaxy S', 'Samsung', 299, 2359),
// 			('S560 Monte', 'Samsung', 250, 2385),
// 			('N8', 'Nokia', 150, 7543)

//     `

// 		// Code for writing to a gile
// 		// Write the data to a file
// 		fs.writeFileSync(good2, JSON.stringify(data))

// 		console.log(data)
// 	} catch (error) {
// 		console.error('FuckYouBastard:', error)
// 		fs.writeFileSync(bad2, JSON.stringify(error))
// 	}
// 	process.exit(0)
// }
// // Execute the code
// inTa()

// ---------------------------------------------------------------------------------------

// now code for creating  transforms

const good2 = 'outs/sTa.json'
const bad2 = 'outs/sTaError.json'

// makign thet Table
async function sTa() {
	try {
		const data = await sql`
		-- Make a calculated column and display results
		SELECT 
			name, price*units_sold as revenue
		FROM phones

    `

		// Code for writing to a gile
		// Write the data to a file
		fs.writeFileSync(good2, JSON.stringify(data))

		console.log(data)
	} catch (error) {
		console.error('FuckYouBastard:', error)
		fs.writeFileSync(bad2, JSON.stringify(error))
	}
	process.exit(0)
}
// Execute the code
sTa()
