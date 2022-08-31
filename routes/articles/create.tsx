/** @jsx h */
import { h } from 'preact'
import { Handlers, PageProps } from '$fresh/server.ts'
import Editor from '../../islands/Editor.tsx'
import TitleEditor from '../../islands/TitleEditor.tsx'
import { supabase } from "../../db/supabase.ts";
import { Article } from '../../types/article.ts';

interface Data {
  query: string
	message?: string
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url)
    const query = url.searchParams.get('q') || 'new'
    return ctx.render({ query })
  },

  async POST(req, ctx) {
    const formData = await req.formData()
    const title = formData.get('title')?.toString() || ''
    const content = formData.get('content')?.toString() || ''
    const plain_title = formData.get('plain_title')?.toString() || ''
    const plain_content = formData.get('plain_content')?.toString() || ''

    const { data, error } = await supabase.from<Article>('articles').insert({
			title,
			content,
      plain_content,
      plain_title
		})

    if (error) {
      return ctx.render({  query: '', message: error.message })
    }

    const resp = new Response(null, {
      status: 303,
      headers: { Location: '/' },
    })

    return resp
  },
}

export default function Home({ data, url }: PageProps<Data>) {
  const { query } = data

  return (
    <div class="max-w-[800px] pt-8 px-4 m-auto">
      <form class="flex flex-col gap-4" method="POST">
        <TitleEditor title="" />
        <Editor placeholder="Write your content..." />
				<button>Save</button>
      </form>
    </div>
  )
}
