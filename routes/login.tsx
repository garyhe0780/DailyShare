/** @jsx h */
import { h } from 'preact'
import { Handlers, PageProps } from '$fresh/server.ts'
import { setCookie, getCookies } from '$std/http/cookie.ts'
import { supabase } from '../db/supabase.ts'

interface Data {
  message?: string
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const maybeUser = getCookies(req.headers)['user']
    if (maybeUser) {
      ctx.state.user = JSON.parse(atob(maybeUser))
      const url = new URL(req.url)
      url.pathname = '/'

      return Response.redirect(url, 303)
    }

    return ctx.render({ })
  },

  async POST(req, ctx) {
    const formData = await req.formData()
    const email = formData.get('email')?.toString() || ''
    const password = formData.get('password')?.toString() || ''

    const { user, error } = await supabase.auth.signIn({ email, password })
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

export default function Login({ data }: PageProps<Data>) {
  const { message } = data

  return (
    <div class="grid h-screen w-screen relative dark:bg-black">
      <div
        class="pt-16 sm:pt-[25vh] flex flex-col items-center h-full w-full m-auto dark:text-white"
      >
        <form
          class="flex flex-col gap-[20px] p-8 sm:border-1 sm:shadow-lg sm:rounded-lg w-[340px] sm:w-[450px]"
          method="POST"
        >
          <div class="flex flex-col gap-[4px]">
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              autocomplete="email"
              class="px-4 py-3 border-1 rounded-md"
              required
            />
          </div>
          <div class="flex flex-col gap-[4px]">
            <div class="flex items-center justify-between">
              <label for="password">Password</label>
              <a
                href="/forgot-password"
                class="flex text-underline text-primary-500"
              >
                Forgot Password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              autocomplete="current-password"
              class="px-4 py-3 border-1 rounded-md"
              minLength={8}
              aria-describedby="password-minlength"
              required
            />
          </div>
          <div class="flex items-center gap-[.4rem] mb-[44px]">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              class="h-4 w-4 rounded"
            />
            <label for="remember">Keep me logged in</label>
          </div>

          <button
            class="h-[48px] rounded-md bg-primary-500 text-white hover:bg-primary-600"
          >
            Continue
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
