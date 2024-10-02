import { verifierAbi } from "@/lib/abi"
import { useWriteContract } from "wagmi"


export const useNebulaWrite = (signal: string) => {
    const { writeContractAsync, data: hash, error } = useWriteContract()
    const claimNebula = async (identity: string, data: string, options?: any) => {
        return await writeContractAsync({
            abi: verifierAbi,
            address: "0x68F3E3adc76D525671BA58e78885DA44713a5e05",
            functionName: 'claimIdentity',
            args: [identity, data],
            ...options
        })
    }
    return { claimNebula, hash, error }
}