"use client";

import * as React from "react";
import { useEffect } from "react";
import {
    darkTheme,
    getDefaultConfig,
    RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";

import { base, bsc, fantom } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// import localFont from "next/font/local";
// const undead_pixel_11 = localFont({ src: "./fonts/Undead_Pixel_11.ttf" });

const config = getDefaultConfig({
    appName: "DegenCentral",
    projectId: "a8873d62d9825cfefaad2d386c295cc8",
    chains: [bsc, base, fantom],
    ssr: true, // If your dApp uses server side rendering (SSR)
});

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
        //     body: undead_pixel_11.style.fontFamily,
        // },
    },
};

const queryClient = new QueryClient();

// import { ContextProvider } from "./contexts";
import { Toaster } from "react-hot-toast";
// import { TooltipProvider } from "@/app/components/ui/tooltip";


export function Providers({ children }) {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);


    useEffect(() => {

        console.log("provider works")

    }, [])

    return (
        // <ContextProvider>
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    <RainbowKitProvider theme={rainbowTheme}>
                        {/* <TooltipProvider delayDuration={0}>
                            {mounted && children}
                        </TooltipProvider> */}
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
        // </ContextProvider>
    );
}
