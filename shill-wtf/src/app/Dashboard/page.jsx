"use client"
import Image from "next/image";
import WagmiButton from "../components/buttons/WagmiButton";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl">Dashboard</h1>

      <WagmiButton></WagmiButton>
    </main>
  );
}
