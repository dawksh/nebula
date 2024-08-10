import { parseSpotifyCallback } from '@/lib/utils';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Callback = () => {
    const { push } = useRouter()
    useEffect(() => {
        const callback = parseSpotifyCallback(window)
        callback.expiry = Date.now() + 3600000
        localStorage.setItem("spotifyData", JSON.stringify(callback))
        push("/spotify")
    }, [])
    return (
        <div className={`flex justify-center items-center`}>sending to spotify page...</div>
    )
}

export default Callback