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

        setApidata({ tokenId : "43", username: "ETHArabiais", address: "0x7ccc00f6b2938d4cfa2012713e632dc5c533f5c1"});
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
            <div className="text-black text-2xl font-bold mb-4 mx-5">
              REGISTER SHILLER
            </div>
            <table className="mt-4 text-black w-full border border-black px-2">
              <thead>
                <tr className="px-5">
                  <th className="py-2 px-2 border border-black">TOKEN ID</th>
                  <th className="py-2 px-2 border border-black">USERNAME</th>
                  <th className="py-2 px-2 border border-black">WALLET ADDRESS</th>
                </tr>
              </thead>
              <tbody>
                {Apidata ? (
                  <>
                    <th className="py-2 px-2 border border-black">{Apidata.tokenId}</th>
                    <th className="py-2 px-2 border border-black">{Apidata.username}</th>
                    <th className="py-2 px-2 border border-black">{Apidata.address}</th>
                  </>
                ) : (
                  <tr>
                    <td colSpan="3" className="py-2 px-2 border border-black text-center">
                      Loading...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </SlideInOut>
  );
}
