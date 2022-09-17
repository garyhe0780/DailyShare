import { Handlers, PageProps } from '$fresh/server.ts'
import { deleteCookie } from '$std/http/cookie.ts'
import { supabase } from '../db/supabase.ts'

export const handler: Handlers<undefined> = {
  async GET(req, ctx) {
    const resp = new Response(null, {
      status: 303,
      headers: { Location: '/login' },
    })

		await supabase.auth.signOut()
    deleteCookie(resp.headers, 'user')
		
    return resp
  },
}

export default function Logout() {
  return <div />
}
