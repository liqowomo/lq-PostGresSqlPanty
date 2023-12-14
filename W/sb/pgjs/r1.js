/**
 * Actual queries will be run here
 *
 */

import sql from './db.js'

async function getData() {
	const data = await sql`
        SELECT 
            *  from countries
        `
	return data
}
console.log(getData())
// Run query
