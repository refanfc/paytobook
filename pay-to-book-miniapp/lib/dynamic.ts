
'use client'

import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core'
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'
import { DynamicWagmiConnector } from '@dynamic-labs/wagmi-connector'

export const DynamicProvider = ({ children }: { children: React.ReactNode }) => (
  <DynamicContextProvider
    settings={{
      environmentId: 'YOUR_DYNAMIC_ENV_ID',
      walletConnectors: [EthereumWalletConnectors],
    }}
  >
    <DynamicWagmiConnector>{children}</DynamicWagmiConnector>
  </DynamicContextProvider>
)
