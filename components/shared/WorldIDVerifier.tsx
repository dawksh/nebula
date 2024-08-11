import { IDKitWidget, VerificationLevel } from '@worldcoin/idkit'
import React from 'react'
import Button from '../ui/button'
import { useSignal } from '@/hooks/useSignal';
import { useNebulaWrite } from '@/hooks/useNebulaWrite';
import { hexToBigInt } from 'viem';
import { toast } from 'sonner';

const WorldIDVerifier = ({ identifier, data }: { identifier: string, data: string }) => {
    const { signal } = useSignal(identifier);
    const { claimNebula, hash, error } = useNebulaWrite(signal);
    return (
        <div>
            <IDKitWidget
                app_id={process.env.NEXT_PUBLIC_APP_ID as any}
                action={process.env.NEXT_PUBLIC_APP_ACTION as string}
                onSuccess={async (res) => {
                    const hash = await claimNebula(identifier, hexToBigInt(res.merkle_root as `0x${string}`), hexToBigInt(res.nullifier_hash as `0x${string}`), res.proof, data)
                    toast.success('Identity Claimed: ', {
                        action: {
                            label: 'View Transaction',
                            onClick: () => window.open(`https://sepolia-optimism.etherscan.io/tx/${hash}`)
                        },
                    })
                }}
                verification_level={VerificationLevel.Orb}
                signal={signal}
            >
                {({ open }) =>
                    <Button onClick={open}>Verify with nebula</Button>
                }
            </IDKitWidget>
        </div>
    )
}

export default WorldIDVerifier