"use client"
import Image from "next/image";
import { SlideInOut } from "../animations";
import { useMemo, useEffect, useState} from "react";
import {getTokenDescription} from '../scripts/scripts'


export default function RegisterShiller() {

  const [Apidata, setApidata] = useState(null)

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/nft_fetch', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();

        setApidata(data);
        console.log("API response", data);
      } catch (error) {
        console.error("API error", error);
      }
    };

    fetchData();
  }, []);

  
  return (
    <SlideInOut>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-white via-yellow-200 to-yellow-300">
        <div className="flex gap-10 h-[70vh]">
          <div className="border border-black h-[380px] w-[800px] justify-center rounded-3xl z-20">
            <div className="text-black text-2xl font-bold mb-4">
              Register Shiller
            </div>
            <table className="mt-4 text-black w-full">
              <thead>
                <tr>
                  <th className="py-2">Token ID</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">NFT Contract Address</th>
                </tr>
              </thead>
              <tbody>
                {/* Render table rows here */}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </SlideInOut>
  );
}
