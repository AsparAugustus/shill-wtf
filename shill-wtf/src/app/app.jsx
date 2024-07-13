"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useAccount, useConfig, useConnect } from "wagmi";
import { signMessage } from "wagmi/actions";
import toast from "react-hot-toast";
import { injected } from "wagmi/connectors";
import React from "react";
// import { useChainContext } from "./contexts";

export default function App({
  children,
}) {


  return (
    <>
      <main
        style={{ height: "100svh", width: "100svw" }}
        className="grid grid-rows-[min-content,1fr] pb-2 gap-2 backdrop-blur-[6px] overflow-hidden"
      >
        {children}
      </main>

      {/* <main className="w-full h-screen md:hidden justify-center items-center justify-content border">
        <p className="text-center items-center">
          This application does not currently support mobile devices.
        </p>
      </main> */}
    </>
  );
}
