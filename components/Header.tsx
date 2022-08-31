/** @jsx h */
import { h } from 'preact'
import { User, AppInfo } from '../types/index.ts'
import Avatar from '../islands/Avatar.tsx'
import ToggleButton from '../islands/ToggleButton.tsx'

interface HeaderIProps {
  user: User
  appInfo: AppInfo
}

export default function Header({ user, appInfo }: HeaderIProps) {
  return (
    <header class="h-[64px] flex items-center px-[24px] gap-4 bg-border-1 border-slate-300 shadow-sm">
      <ToggleButton />
      <a href="/" class="dark:text-white flex items-center gap-1">
        <img
          src={appInfo.logo}
          class="h-8 w-8 rounded-full object-fit"
          loading="lazy"
        />
        <span class="font-light text-xl">{appInfo.name}</span>
      </a>
      <div class="flex-auto"></div>
      <div class="flex items-center hover:bg-zinc-700 cursor-pointer">
        <Avatar user={user} />
      </div>
    </header>
  )
}
