import { registryABI } from "@/lib/abi"
import { useReadContract } from "wagmi"

export const useSignal = (identifier: string) => {
    const { data } = useReadContract({
        abi: registryABI,
        address: "0x597A11d6C6B74DB89A152A325e8a0d2a3C12747D",
        functionName: 'resolve',
        args: [identifier]
    })
    return { signal: data }
}
