/** @jsx h */
import { h } from 'preact'

interface NotificationIProps {
  num: number
}

export default function Notification(props: NotificationIProps) {
  const { num } = props
  return (
    <a class="flex items-center mr-[12px]" href="/notifications">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031V18zm7-16c4.97 0 9 4.043 9 9.031V20H3v-8.969C3 6.043 7.03 2 12 2zM9.5 21h5a2.5 2.5 0 1 1-5 0z"
          fill="rgba(255,255,255,1)"
        />
      </svg>
      <div
        class="text-white ml-[8px] w-5 h-5 text-sm rounded-md bg-[#555] flex justify-center items-center bg-[#F05454]"
      >
        {num}
      </div>
    </a>
  )
}