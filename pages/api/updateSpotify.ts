// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Redis } from '@upstash/redis'
import axios from 'axios';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method != "POST") {
        return res.status(400).send("Method not allowed");
    }

    const redis = new Redis({
        url: process.env.UPTASH_API_URL,
        token: process.env.UPSTASH_API_TOKEN,
    })

    const { accessToken, address } = req.body;

    const { data } = await axios.get('https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=3', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    const artistData = data.items.map((item: any) => {
        const highestResImage = item.images.reduce((prev: any, curr: any) => (prev.height > curr.height ? prev : curr));
        return {
            name: item.name,
            image: highestResImage.url
        };
    });

    redis.set(address, JSON.stringify({ artistData, timestamp: Date.now() }));

    res.status(200).json({
        address, artistData
    })

}
