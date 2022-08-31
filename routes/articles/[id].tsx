/** @jsx h */
import { h } from 'preact'
import { Article } from '../../types/index.ts'
import { Handlers, PageProps } from '$fresh/server.ts'
import { supabase } from '../../db/supabase.ts'

interface Data {
  article: Article
}

export const handler: Handlers<Data> = {
  async GET(_, ctx) {
    const { id } = ctx.params
    const { data: article } = await supabase
      .from<Article>('articles')
      .select('*')
      .eq('id', id)
      .single()

    if (!article) {
      return ctx.renderNotFound()
    }

    return ctx.render({ article })
  },
}

export default function ArticleDetail({ data }: PageProps<Data>) {
  const { article } = data

  return (
    <div class="flex flex-col max-w-[800px] pt-8 px-4 pb-20 gap-8 m-auto">
      <a href="javascript:history.go(-1)" class="text-black dark:text-white flex items-center gap-4 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" />
        </svg>
        <span class="text-sm">Back to Home</span>
      </a>
      <h1
        dangerouslySetInnerHTML={{ __html: article.title }}
        class="text-2xl font-bold tracking-widest text-center"
      ></h1>
      <div
        dangerouslySetInnerHTML={{ __html: article.content }}
        class="tracking-wide"
      ></div>
    </div>
  )
}
