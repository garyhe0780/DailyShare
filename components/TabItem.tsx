/** @jsx h */
import { h } from 'preact'

export default function TabItem(props: {
  href: string
  activated: boolean
  label: string
}) {
  const { activated, href, label } = props
  const classes = activated ? 'text-primary-600 border-primary-600' : ''

  return (
    <li class="mr-2">
      <a
        href={href}
        class={`inline-block p-2 rounded-t-lg border-b-1 border-transparent hover:text-primary-600 hover:border-primary-300 dark:hover:text-gray-300 ${classes}"`}
        aria-current={activated ? 'page' : ''}
      >
        {label}
      </a>
    </li>
  )
}
