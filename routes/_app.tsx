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
            --primary-100: ${colors[1][100]};
            --primary-200: ${colors[1][200]};
            --primary-300: ${colors[1][300]};
            --primary-400: ${colors[1][400]};
            --primary-500: ${colors[1][500]};
            --primary-600: ${colors[1][600]};
            --primary-700: ${colors[1][700]};
            --primary-800: ${colors[1][800]};
            --primary-900: ${colors[1][900]};
          }`}</style>
      </Head>
      <Component />
    </div>
  )
}
