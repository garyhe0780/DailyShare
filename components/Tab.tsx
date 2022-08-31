/** @jsx h */
import { h, ComponentChildren } from 'preact'

export default function Tab(props: { children: ComponentChildren }) {
  return <ul class="w-full flex flex-wrap -mb-px border-b-1 border-slate-200 ">{props.children}</ul>
}
