import { Handlers, PageProps } from '$fresh/server.ts'
import { setCookie, getCookies } from '$std/http/cookie.ts'
import { supabase } from '../db/supabase.ts'

interface Data {
  message?: string
}

export const handler: Handlers<Data> = {
  async POST(req, ctx) {
    const formData = await req.formData()
    const password = formData.get('password')?.toString() || ''

    const { user, error } = await supabase.auth.update({ password })
    if (error) {
      return ctx.render({ message: error.message })
    }

    const resp = new Response(null, {
      status: 303,
      headers: { Location: '/' },
    })

    setCookie(resp.headers, {
      name: 'user',
      value: btoa(JSON.stringify(user)),
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
    })

    return resp
  },
}

export default function SetPassword({ data }: PageProps<Data>) {
  const { message } = data

  return (
    <div class="grid h-screen relative">
      <div
        class="flex flex-col bg-[#fff] h-full min-w-[400px] m-auto pt-[30vh]"
      >
        <div class="flex flex-col items-center mb-[54px]">
          <h2 class="text-2xl mb-[4px] font-semibold">Set your password</h2>
        </div>

        <form class="flex flex-col gap-[20px]" method="POST">
          <div class="flex flex-col gap-[4px]">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              autocomplete="new-password"
              class="px-[12px] py-[8px] border-1 rounded-md"
              minLength={8}
              aria-describedby="password-minlength"
              required
            />
          </div>

          <button class="bg-black text-white h-[48px] rounded-md">
            Confirm
          </button>
        </form>
        {message && (
          <div
            class="absolute top-[10vh] left-0 right-0 m-auto w-[320px] h-[38px] flex justify-center items-center bg-red-500 rounded-md text-white animate-hiddenAfter5Secs"
          >
            {message}
          </div>
        )}
      </div>
    </div>
  )
}
