/** @jsx h */
import { h } from 'preact'
import { Handlers, PageProps } from '$fresh/server.ts'
import Tab from '../components/Tab.tsx'
import TabItem from '../components/TabItem.tsx'
import { Article } from '../types/index.ts'
import { supabase } from '../db/supabase.ts'

interface Data {
  query: string
  articles: Article[]
}

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    const url = new URL(req.url)
    const query = url.searchParams.get('q') || 'new'
    const { data: articles } = await supabase
      .from<Article>('articles')
      .select('*')

    return ctx.render({ query, articles: articles || [] })
  },
}

export default function Home({ data, url }: PageProps<Data>) {
  const { query, articles } = data

  return (
    <div class="flex flex-col max-w-[800px] pt-8 px-4 gap-8 m-auto">
      <div class="flex flex-col gap-2">
        <h3 class="text-2xl font-bold">Daily Share</h3>
        <p class="text-slate-400">Randomly upload articles</p>
      </div>

      <div class="flex flex-col gap-8">
        <Tab>
          {['New', 'Top', 'Favorite'].map((e) => (
            <TabItem
              href={`?q=${e.toLowerCase()}`}
              activated={query === e.toLowerCase()}
              label={e}
            />
          ))}
        </Tab>
        <ul class="flex flex-col gap-6">
          {articles.map((e, index) => (
            <li key={index}>
              <ArticleSummary article={e} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ArticleSummary({ article }: { article: Article }) {
  return (
    <a class="flex gap-4 flex-col sm:flex-row" href={`/articles/${article.id}`}>
      <img
        src={article.image_url || 'https://images.unsplash.com/photo-1657299156594-50426d5125a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80'}
        class="w-full sm:w-[200px] h-[184px] object-cover"
        loading="lazy"
      />
      <div class="flex flex-col gap-4">
        <h3 class="text-2xl font-bold">{article.plain_title}</h3>
        <p class="h-24 text-ellipsis overflow-hidden">
          {article.plain_content}
        </p>
        <div class="flex gap-4">
          <span>10 views</span>
          <span>2 likes</span>
        </div>
      </div>
    </a>
  )
}
