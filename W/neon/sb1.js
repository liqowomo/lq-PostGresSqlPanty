import {neon} from '@neondatabase/serverless'

async function fetchData() {
	try {
		const sql = neon(
			'postgresql://liqowomo:nY3TZiOBqy7d@ep-steep-king-75691952.ap-southeast-1.aws.neon.tech/T1NeonDB?sslmode=require'
		)

		const posts = await sql(`
		SELECT * FROM countries
		`)
		console.log(posts)
	} catch (error) {
		console.error('An error occurred:', error)
	}
}

// make bastard table

async function fuckTable() {
	try {
		const sql = neon(
			'postgresql://liqowomo:nY3TZiOBqy7d@ep-steep-king-75691952.ap-southeast-1.aws.neon.tech/T1NeonDB?sslmode=require'
		)

		const fukt = await sql(`
		create table Rapists (
			id int8 primary key
		)
		`)
		console.log(fukt)
	} catch (error) {
		console.error('An error occurred:', error)
	}
}

// Execute bastard
fuckTable()
