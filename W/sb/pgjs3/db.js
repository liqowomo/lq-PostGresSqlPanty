/**
 * Using psotgres.js to connect with Psql
 *https://supabase.com/docs/guides/database/connecting-to-postgres
 */

// db.js
import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL
const sql = postgres(connectionString)

export default sql
