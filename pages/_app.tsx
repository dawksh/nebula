import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@/components/ui/themeProvider'
import Navbar from '@/components/shared/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark">
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}
