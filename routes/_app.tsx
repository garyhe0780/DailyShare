/** @jsx h */
/** @jsxFrag Fragment */
import { h } from 'preact'
import { AppProps } from '$fresh/server.ts'
import { Head } from '$fresh/runtime.ts'
import { colors } from '../utils/color.ts'

export default function App({ Component }: AppProps) {
  return (
    <div class="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <style>{
          `:root {
            --primary-100: ${colors[0][100]};
            --primary-200: ${colors[0][200]};
            --primary-300: ${colors[0][300]};
            --primary-400: ${colors[0][400]};
            --primary-500: ${colors[0][500]};
            --primary-600: ${colors[0][600]};
            --primary-700: ${colors[0][700]};
            --primary-800: ${colors[0][800]};
            --primary-900: ${colors[0][900]};
          }`}</style>
      </Head>
      <Component />
    </div>
  )
}
