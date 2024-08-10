import { IDKitWidget, VerificationLevel } from '@worldcoin/idkit'
import React from 'react'
import Button from '../ui/button'
import { useSignal } from '@/hooks/useSignal';

const WorldIDVerifier = ({ identifier }: { identifier: string }) => {
    const { signal } = useSignal(identifier);
    return (
        <div>
            <IDKitWidget
                app_id={process.env.NEXT_PUBLIC_APP_ID as any}
                action={process.env.NEXT_PUBLIC_APP_ACTION as string}
                onSuccess={async (res) => {

                }}
                verification_level={VerificationLevel.Orb}
                signal={signal as string}
            >
                {({ open }) =>
                    <Button onClick={open}>Verify with nebula</Button>
                }
            </IDKitWidget>
        </div>
    )
}

export default WorldIDVerifier