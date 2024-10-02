import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import axios from "axios";
import Button from './ui/button';
import { useNebulaWrite } from '@/hooks/useNebulaWrite';
import { useNebulaDataRead } from '@/hooks/useNebulaDataRead';
import { useAccount } from 'wagmi';
import { Hex, hexToString } from 'viem';
import Link from 'next/link';

interface SpotifyUser {
    display_name: string;
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    images: Array<{
        url: string;
        height: number;
        width: number;
    }>;
    type: string;
    uri: string;
    followers: {
        href: string | null;
        total: number;
    };
    country: string;
    product: string;
    explicit_content: {
        filter_enabled: boolean;
        filter_locked: boolean;
    };
    email: string;
}

const SpotifyProfile = ({ accessToken }: { accessToken: string }) => {

    const [profile, setProfile] = useState<SpotifyUser>();
    const [proofData, setProofData] = useState<string>("");

    useEffect(() => {
        const getProfileProof = async () => {
            const { data } = await axios.get(`/api/signSpotify?spotifyId=${profile?.id}`)
            setProofData(data.encodedData)
        }
        if (profile?.id) getProfileProof()
    }, [profile])

    async function getProfile(accessToken: string) {

        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        });
        const data = await response.json();

        setProfile(data)
    }
    const { address } = useAccount()


    useEffect(() => {
        if (accessToken) getProfile(accessToken)
    }, [])

    const { identityAddress, data } = useNebulaDataRead(address as `0x${string}`, "0x5893d26aac413b1d")
    const { claimNebula, hash } = useNebulaWrite("0x5893d26aac413b1d")

    if (!profile) return (
        <div>
            Spotify Profile
        </div>
    )


    return (
        <div className='flex justify-center items-center my-2 px-4 py-2 rounded-md flex-col'>
            <Image src={profile.images[1].url} width={300} height={300} alt={profile.display_name} className='rounded-md' />
            <span className='my-2'>
                {profile.display_name}
            </span>
            <span className='my-2'>
                followers: {profile.followers.total}
            </span>
            <span className='my-2'>
                product: {profile.product}
            </span>
            {!data || data == "0x" ? <Button onClick={() => {
                claimNebula("0x5893d26aac413b1d", proofData)
            }}>publish on nebula</Button> : (
                <div>
                    verified id: {hexToString(data as Hex)}
                    <br />
                    visit here: <Link href={`https://open.spotify.com/user/${hexToString(data as Hex)}`} target='_blank'>click</Link>
                </div>
            )}
        </div>
    )
}

export default SpotifyProfile