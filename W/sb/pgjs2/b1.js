/***
 * Will make a new table in Postgres supoabase in this bastardfucker
 *
 */

import sql from './db.js'

async function rapeData() {
	try {
		await sql`
        create table
        assSmell (id int8 primary key, name text) `
      
      insert into
        countries (id, name)
      values
        (1, 'Afghanistan'),
        (2, 'Albania'),
        (3, 'Algeria');
    `
		console.log(data)
	} catch (error) {
		console.error('An error occurred:', error)
	}
	process.exit(0)
}

// Execute the code
rapeData()
