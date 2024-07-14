import '@rainbow-me/rainbowkit/styles.css';
import * as React from "react";
import {
  darkTheme,
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  bsc,
  fantom
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";


const rainbowDark = darkTheme();
const rainbowTheme = {
  ...rainbowDark,
  ...{
    colors: {
      ...rainbowDark.colors,
      accentColor: "#06b6d4",
    },
    radii: {
      ...rainbowDark.radii,
    }
    // fonts: {
    //   body: undead_pixel_11.style.fontFamily,
    // },
  },
};

const queryClient = new QueryClient();

export function Providers({ children }) {
    const [mounted, setMounted] = React.useState(false);

  
  
    React.useEffect(() => setMounted(true), []);

    const config = getDefaultConfig({
        appName: "DegenCentral",
        projectId: "a8873d62d9825cfefaad2d386c295cc8",
        chains: [bsc, base, fantom],
        ssr: true, // If your dApp uses server side rendering (SSR)
      });
  
    return (
   
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider theme={rainbowTheme}>

              <Toaster
                toastOptions={{
                  duration: 5000,
                  className: "flex flex-grow",
                  success: {
                    style: {
                      background: "#1F2937",
                      border: "1px solid #22C55E",
                      color: "#22C55E",
                    },
                  },
                  error: {
                    style: {
                      background: "#1F2937",
                      border: "1px solid #EF4444",
                      color: "#EF4444",
                    },
                  },
                  style: {
                    border: "1px solid #713200",
                    padding: "16px",
                    color: "#713200",
                    minWidth: "200px",
                    maxWidth: "500px",
                    minHeight: "50px",
                    overflow: "auto",
                  },
                }}
              />
              {children}
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>

    );
  }
  