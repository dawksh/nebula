import { Inter, Public_Sans } from 'next/font/google'
import { IDKitWidget, VerificationLevel, ISuccessResult } from '@worldcoin/idkit'
import Button from '@/components/ui/button'
import { useAccount, useWriteContract } from "wagmi";
import { decodeAbiParameters, hexToBigInt, getAddress } from "viem"
import { verifierAbi } from '@/lib/abi';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


const inter = Inter({ subsets: ['latin'] })
const public_sans = Public_Sans({ subsets: ['latin'] })

export default function Home() {
  const { address } = useAccount()

  const { writeContractAsync } = useWriteContract()

  const callVerifyContract = async (root: any, nullifier: any, proof: any) => {
    const unpackedProof = decodeAbiParameters([{ type: 'uint256[8]' }], proof)[0]
    console.log(unpackedProof)
    const hash = await writeContractAsync({
      abi: verifierAbi,
      address: "0x2B6835cBD93632E7E49df029966BC8b5bb62a245",
      functionName: "verifyAndExecute",
      args: ["0x212655787144F5e1D37cC3379F9ec1840639CE23", root, nullifier, proof]
    })
  }

  const { push } = useRouter()

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${public_sans.className}`}
    >
      {address &&
        <IDKitWidget
          app_id={process.env.NEXT_PUBLIC_APP_ID as any}
          action={process.env.NEXT_PUBLIC_APP_ACTION as string}
          onSuccess={async (res) => {
            await callVerifyContract(res.merkle_root, res.nullifier_hash, res.proof)
          }}
          verification_level={VerificationLevel.Orb}
          signal={"0x6AEd7bEE61Ab97e6f371342F9F5858024be8CA34"}
        >
          {({ open }) =>
            <Button onClick={open}>Verify with World ID</Button>
          }
        </IDKitWidget>}
      <Button onClick={() => push("/spotify")}>spotify</Button>
    </main>
  )
}
