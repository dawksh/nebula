import { verifierAbi } from "@/lib/abi"
import { useWriteContract } from "wagmi"


export const useNebulaWrite = (signal: string) => {
    const { writeContractAsync, data: hash, error } = useWriteContract()
    const claimNebula = async (identity: string, root: BigInt, nullifier: BigInt, proof: string, data: string, options?: any) => {
        return await writeContractAsync({
            abi: verifierAbi,
            address: "0xa3346FAeB77fD81C52342E691404C42F28045225",
            functionName: 'claimIdentity',
            args: [[signal, root, nullifier, proof], identity, data],
            ...options
        })
    }
    return { claimNebula, hash, error }
}