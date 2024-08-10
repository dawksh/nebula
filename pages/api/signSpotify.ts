// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { encodeAbiParameters, toHex, parseSignature, keccak256, hashMessage } from 'viem';
import { privateKeyToAccount } from "viem/accounts"

export type signatureData = {
    compactSignature: string,
    signature: {
        r: string,
        s: string,
        v: string,
    },
    encodedData: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<signatureData>
) {
    const { spotifyId } = req.query
    const account = privateKeyToAccount(("0x" + process.env.PRIVATE_KEY) as `0x${string}`);
    const hash = keccak256(toHex(spotifyId as string))
    const signature = await account.signMessage({ message: hash })

    const { r, s, v } = parseSignature(signature as `0x${string}`)

    const encodedData = encodeAbiParameters(
        [
            { name: 'hash', type: 'bytes32' },
            { name: 'r', type: 'bytes32' },
            { name: 's', type: 'bytes32' },
            { name: 'v', type: 'uint8' }
        ],
        [hashMessage(hash) as `0x${string}`, r as `0x${string}`, s as `0x${string}`, Number(v)]
    )

    res.status(200).json({
        compactSignature: signature, signature: {
            r, s, v: v?.toString() || ""
        },
        encodedData
    })
}
