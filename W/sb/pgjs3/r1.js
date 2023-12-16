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

//Drop a table
async function dropTable() {
	try {
		const data = await sql`
      drop table 
	  countries
    `
		console.log(data)
	} catch (error) {
		console.error('An error occurred:', error)
	}
	process.exit(0)
}
//Execute code
// dropTable()
