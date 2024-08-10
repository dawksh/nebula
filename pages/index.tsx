import { Inter, Public_Sans } from 'next/font/google'
import Button from '@/components/ui/button'

import { useRouter } from 'next/router';


const inter = Inter({ subsets: ['latin'] })
const public_sans = Public_Sans({ subsets: ['latin'] })

export default function Home() {

  const { push } = useRouter()

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${public_sans.className}`}
    >
      <h1 className='text-3xl font-bold mb-16'>nebula protocol</h1>
      <h3>choose from a range of verifiers available:</h3>
      <Button className="m-4" onClick={() => push("/spotify")}>spotify verifier</Button>
      <Button className="m-4" onClick={() => push("/nft")}>nft verifier</Button>
    </main>
  )
}
