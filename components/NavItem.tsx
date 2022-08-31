/** @jsx h */
import { ComponentChildren, h } from 'preact'

export default function NavItem(props: {
  url: string
  currentUrl: string
  name: string
  children: ComponentChildren
}) {
  const { url, name, children, currentUrl } = props

  const classes = (url === '/' ? url === currentUrl : currentUrl.startsWith(url))
    ? 'text-primary-500 bg-primary-100 dark:bg-primary-500'
    : ''

  return (
    <a
      class={`flex items-center p-2 mt-1 mr-4 mb-2 ml-4 rounded-lg ${classes} hover:text-primary-500 dark:hover:bg-primary-600`}
      href={url}
    >
      <div class="mr-[16px] dark:text-white">{children}</div>
      <div class="text-sm dark:text-white">{name}</div>
    </a>
  )
}
