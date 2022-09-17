export default function TabItem(props: {
  href: string
  activated: boolean
  label: string
}) {
  const { activated, href, label } = props
  const classes = activated ? 'font-bold text-primary-600' : ''

  return (
    <li class="mr-2">
      <a
        href={href}
        class={`inline-block p-2 rounded-t-lg hover:text-primary-600  dark:hover:text-gray-300 ${classes}"`}
        aria-current={activated ? 'page' : ''}
      >
        {label}
      </a>
    </li>
  )
}
