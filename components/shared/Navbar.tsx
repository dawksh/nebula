import * as React from 'react'
import { ConnectKitButton } from "connectkit"

export default function Navbar() {
    return (
        <div className='p-8 flex w-screen justify-end'>
            <ConnectKitButton theme="retro" />
        </div>
    )
}