import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@/components/ui/themeProvider'
import Navbar from '@/components/shared/Navbar'

import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet, baseSepolia, optimismSepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [baseSepolia, optimismSepolia],
    transports: {
      // RPC URL for each chain
      [baseSepolia.id]: http(
        `https://base-sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
      ),
      [optimismSepolia.id]: http(
        `https://optimism-sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
      ),
    },

    // Required API Keys
    walletConnectProjectId: String(process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID),

    // Required App Info
    appName: "Nebula",

    // Optional App Info
    appDescription: "Attestation based identity oracle",
  }),
);

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ConnectKitProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark">
              <Navbar />
              <Component {...pageProps} />
            </ThemeProvider>
          </ConnectKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  )
}
