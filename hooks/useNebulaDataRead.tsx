import { registryABI, spotifyResolverABI } from "@/lib/abi"
import { useReadContract } from "wagmi"


export const useNebulaDataRead = (address: `0x${string}`, identity: string) => {
    const { data: identityAddress } = useReadContract({
        abi: registryABI,
        address: "0x4A4eB8f862Ebf0AA9ad6E7C0625f29390d8A64A9",
        functionName: 'resolve',
        args: [identity]
    })
    const { data: spotifyData } = useReadContract({
        abi: spotifyResolverABI,
        address: identityAddress as `0x${string}`,
        functionName: 'userData',
        args: [address]
    })
    return { data: spotifyData, identityAddress }
}