
import { erc20Abi } from 'viem'
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi'

export function useBookWithUSDC(receiver: `0x${string}`) {
  const { data: hash, writeContract, isPending } = useWriteContract()
  const { isSuccess } = useWaitForTransactionReceipt({ hash })

  const book = () =>
    writeContract({
      address: '0x340fE1D898ECCAad394e2ba0fC1F93d27c7b717A', // USDC on Base
      abi: erc20Abi,
      functionName: 'transfer',
      args: [receiver, BigInt(5 * 1e6)],
    })

  return { book, isPending, isSuccess }
}
