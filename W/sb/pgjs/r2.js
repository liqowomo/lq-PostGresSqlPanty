import {postgres} from 'postgres'
import dotenv from 'dotenv'
dotenv.config()
const sql = postgres(process.env.DATABASE_URL, {ssl: 'require'})
async function getData() {
	try {
		const data = await sql`
            SELECT * FROM countries
        `
		console.log(data)
	} catch (error) {
		console.error(error)
	}
}

// Run query
getData()
