/* 
This is for mkaing table function
*/

import sql from './db.js'
import fs from 'fs'

// makign thet Table
async function makeTable() {
	try {
		const data = await sql`
		create table
		countries (id int8 primary key, name text);
    `

		// Code for writing to a gile
		// Write the data to a file
		fs.writeFileSync('makeTable.txt', JSON.stringify(data))

		console.log(data)
	} catch (error) {
		console.error('An error occurred:', error)
		fs.writeFileSync('makeTableError.txt', JSON.stringify(error))
	}
	process.exit(0)
}
// Execute the code
// makeTable()

/**88888888888888888888888888888888888888888888888888888888888888888888888888888888888 */
/**88888888888888888888888888888888888888888888888888888888888888888888888888888888888 */
/**88888888888888888888888888888888888888888888888888888888888888888888888888888888888 */

// Inserting rows int he table
async function insData() {
	try {
		const data = await sql`
		insert into
  countries (id, name)
values
  (1, 'Afghanistan'),
  (2, 'Albania'),
  (3, 'Algeria');
    `

		// Code for writing to a gile
		// Write the data to a file
		fs.writeFileSync('insData.txt', JSON.stringify(data))

		console.log(data)
	} catch (error) {
		console.error('An error occurred:', error)
		fs.writeFileSync('ins.txt', JSON.stringify(error))
	}
	process.exit(0)
}

// Execute the code
insData()
