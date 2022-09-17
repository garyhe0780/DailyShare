import { useState } from 'preact/hooks'

interface TitleEditorProps {
  title: string
}

export default function TitleEditor(props: TitleEditorProps) {
  const [value, setValue] = useState(props.title)
  const [text, setText] = useState('')

  const onValueChanged = (e: any) => {
    setValue(e.target.innerHTML)
    setText(e.target.innerText)
  }

  return (
    <div class="relative text-lg font-bold">
      <input type="hidden" name="title" value={value} />
      <input type="hidden" name="plain_title" value={text} />

      <div
        class="flex flex-col gap-2 border-none outline-none p-4"
        contentEditable
        autoFocus
        onInput={onValueChanged}
      />
      {!value && (
        <span class="text-slate-300 absolute top-4 left-4">
          Title
        </span>
      )}
    </div>
  )
}
