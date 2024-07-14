"use client";
import Image from "next/image";
import WagmiButton from "../components/buttons/WagmiButton";

export default function Dashboard() {
    
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24
    bg-gradient-to-b from-white via-pink-200 to-pink-300
      ">
      <h1 className="text-3xl mb-8 uppercase">Dashboard</h1>
      <div className="w-full px-4">
        <div className="overflow-x-auto border rounded-xl" style={{transform:"skewX(-8deg)", border: "1px solid #444"}}>
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="w-full bg-gray-200">
                <th className="py-2 px-4 border-b text-center text-2xl uppercase">
                  Token
                </th>
                <th className="py-2 px-4 border-b text-center text-2xl uppercase">
                  Amount
                </th>
                <th className="py-2 px-4 border-b text-center text-2xl uppercase">
                  Claim
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b text-center uppercase">shill the kim</td>
                <td className="py-2 px-4 border-b text-center uppercase">100</td>
                <td className="py-2 px-4 border-b text-center">
                  <button className="bg-blue-500 text-white py-1 px-3 rounded uppercase">
                    Claim
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b text-center uppercase">new views</td>
                <td className="py-2 px-4 border-b text-center uppercase">200</td>
                <td className="py-2 px-4 border-b text-center">
                  <button className="bg-blue-500 text-white py-1 px-3 rounded uppercase">
                    Claim
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b text-center uppercase">Asian BD</td>
                <td className="py-2 px-4 border-b text-center uppercase">10</td>
                <td className="py-2 px-4 border-b text-center">
                  <button className="bg-blue-500 text-white py-1 px-3 rounded uppercase">
                    Claim
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b text-center uppercase">CocaineOnChain</td>
                <td className="py-2 px-4 border-b text-center uppercase">600</td>
                <td className="py-2 px-4 border-b text-center">
                  <button className="bg-blue-500 text-white py-1 px-3 rounded uppercase">
                    Claim
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

