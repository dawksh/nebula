import { Inter } from 'next/font/google'
import { IDKitWidget, VerificationLevel, ISuccessResult } from '@worldcoin/idkit'
import Button from '@/components/ui/button'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <IDKitWidget
        app_id={process.env.NEXT_PUBLIC_APP_ID as any}
        action={process.env.NEXT_PUBLIC_APP_ACTION as string}
        onSuccess={(res) => {
          console.log(res)
        }}
        handleVerify={(res) => {
          console.log(res)
        }}
        verification_level={VerificationLevel.Orb}
        signal='0x0a1B07c0a41c3Ea539AcfD6655dc7B76ccbF3030'
      >
        {({ open }) =>
          // This is the button that will open the IDKit modal
          <Button onClick={open}>Verify with World ID</Button>
        }
      </IDKitWidget>
    </main>
  )
}
