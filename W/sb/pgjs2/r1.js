import sql from './db.js'

async function getData() {
	try {
		const data = await sql`
      select
      *
      from countries
    `
		console.log(data)
	} catch (error) {
		console.error('An error occurred:', error)
	}
	process.exit(0)
}

// Execute the code
getData()
