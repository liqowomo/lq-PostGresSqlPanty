import {useEffect, useState} from 'react'
import {createClient} from '@supabase/supabase-js'

const supabase = createClient(
	'https://urlqwzlpqnxiduxiwdse.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVybHF3emxwcW54aWR1eGl3ZHNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwNTAyNzAsImV4cCI6MjAxNzYyNjI3MH0.EADDxPgefEY3zArH4glsswKHzgOpnPyirs1n16FCkOk'
)

function App() {
	const [countries, setCountries] = useState([])

	useEffect(() => {
		getCountries()
	}, [])

	async function getCountries() {
		const {data} = await supabase.from('countries').select()
		setCountries(data)
	}

	return (
		<ul>
			{countries.map((country) => (
				<li key={country.name}>{country.name}</li>
			))}
		</ul>
	)
}

export default App
