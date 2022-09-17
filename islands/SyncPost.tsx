import { useInterval } from '../hooks/index.ts'
import { IS_BROWSER } from '$fresh/runtime.ts'
import { asset } from '$fresh/runtime.ts'
import { useState } from 'preact/hooks'

export default function SyncPost() {
  const [status, setStatus] = useState('')

  if (IS_BROWSER) {
    const worker = new Worker(asset('/savePost.js'))
    useInterval(() => {
      const inputs = document.getElementsByTagName('input')
      const title =
        Array.prototype.find.call(inputs, (e) => e.name === 'title').value || ''
      const content =
        Array.prototype.find.call(inputs, (e) => e.name === 'content').value ||
        ''
      const plain_title =
        Array.prototype.find.call(inputs, (e) => e.name === 'plain_title')
          .value || ''
      const plain_content =
        Array.prototype.find.call(inputs, (e) => e.name === 'plain_content')
          .value || ''

      worker.postMessage({
        title,
        content,
        plain_content,
        plain_title,
      })
    }, 10000)

    worker.onmessage = (e) => {
      if (e.data) {
        setStatus(e.data);
      }
    }
  }

  return (
    <div class="fixed top-4 right-4">
      {status === 'loading' && <div class="flex">Saving...</div>}
      {status === 'success' && <div class="flex">Saved</div>}
    </div>
  )
}
