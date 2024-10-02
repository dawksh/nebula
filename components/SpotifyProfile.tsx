import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import WorldIDVerifier from './shared/WorldIDVerifier';
import axios from "axios";

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

    useEffect(() => {
        if (accessToken) getProfile(accessToken)
    }, [])

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

            {proofData && <WorldIDVerifier identifier='0x337f034ec09d4dda' data={proofData} />}
        </div>
    )
}

export default SpotifyProfile