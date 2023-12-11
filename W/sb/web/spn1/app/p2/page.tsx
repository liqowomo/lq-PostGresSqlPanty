import {createClient} from '@/utils/supabase/server'
import {cookies} from 'next/headers'

export default async function P2() {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)
	const {data: notes} = await supabase.from('countries').select()

	return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
