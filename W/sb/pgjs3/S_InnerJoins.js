/*
Using sql to do inner joins
Table - Comments fiels with photso fiels
----

Explanation of the query
SELECT co.contents, po.url, co.id // Make a new table name with co with required fields from both tables 
FROM comments co // now renaming the tables comments to co 
LEFT JOIN photos po // Here is the  left join to the table to you want photos to po
ON co.id = po.id // and doing the joining here 


*/

import sql from './db.js'
import fs from 'fs'

// Constants

const good = 'outs/inJo1.json'
const bad = 'outs/inJo1Error.json'

// makign thet Table
async function inJo1() {
	try {
		const data = await sql`
		SELECT co.contents, po.url, co.id
		FROM comments co
		LEFT JOIN photos po
		ON co.id = po.id

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
inJo1()
