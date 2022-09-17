import { Handlers, PageProps } from '$fresh/server.ts'
import { setCookie, getCookies } from '$std/http/cookie.ts'

interface Data {
  message?: string
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const maybeUser = null //getCookies(req.headers)['user']
    if (maybeUser) {
      ctx.state.user = JSON.parse(atob(maybeUser))
      const url = new URL(req.url)
      url.pathname = '/'

      return Response.redirect(url, 303)
    }

    return ctx.render({})
  },

  async POST(req, ctx) {
    /**
     * fix https://github.com/denoland/deno/issues/15254 issue,
     */
    // @todo: remove this line when this issue has been fixed
    const headers = req.headers

    const formData = await req.formData()
    const email = formData.get('email')?.toString() || ''
    const password = formData.get('password')?.toString() || ''

    const { user, error } = { user: null, error: { message: '' } } //await supabase.auth.signIn({ email, password })
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

export default function ForgotPassword({ data }: PageProps<Data>) {
  const { message } = data

  return (
    <div class="grid h-screen relative">
      <div
        class="flex flex-col bg-[#fff] h-full min-w-[400px] m-auto pt-[30vh]"
      >
        <h2 class="text-4xl mb-[4px] font-semibold mb-[16px]">
          Forgot Password
        </h2>
				<a href="/login" class="mb-[44px] text-underline">Return to Login</a>
        <form class="flex flex-col gap-[20px]" method="POST">
          <div class="flex flex-col gap-[4px]">
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              autocomplete="email"
              class="px-[12px] py-[8px] border-1 rounded-md"
              required
            />
          </div>
          <button class="bg-black text-white h-[48px] rounded-md">
            Send Recovery Link
          </button>
        </form>
        {message && (
          <div
            class="absolute top-[10vh] left-[1vw] right-[1vw] h-[38px] flex justify-center items-center bg-red-500 rounded-md text-white animate-hiddenAfter5Secs"
          >
            {message}
          </div>
        )}
      </div>
    </div>
  )
}
