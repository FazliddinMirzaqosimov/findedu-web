import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/components/Branch/accordion-branch.scss'
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
