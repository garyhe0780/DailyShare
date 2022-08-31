/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

interface EditorProps {
  placeholder: string
}

export default function Editor(props: EditorProps) {
  const [value, setValue] = useState('')
  const [text, setText] = useState('')

  const onValueChanged = (e: any) => {
    setValue(e.target.innerHTML)
    setText(e.target.innerText)
  }

  return (
    <div class="relative">
      <input type="hidden" name="content" value={value} />
      <input type="hidden" name="plain_content" value={text} />

      <div
        class="flex flex-col gap-2 border-none outline-none p-4"
        contentEditable
        onInput={onValueChanged}
      />
      {!value && (
        <span class="text-slate-300 absolute top-4 left-4 text-lg">
          {props.placeholder}
        </span>
      )}
    </div>
  )
}
