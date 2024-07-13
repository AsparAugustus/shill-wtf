"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const NavBar = () => {
  const [activeButton, setActiveButton] = useState('REGISTER SHILLER');

  return (
    <div>
      <div 
      
      className="flex justify-between pt-4 px-10 bg-white w-full relative"
      styles={{ zIndex: "5", position: "relative" }}>
        <p className="text-4xl relative z-20 text-black">SHILL . WTF</p>

        <div className="flex items-center space-x-8 relative z-20">
          <button
            className={`handwriting text-xl ${activeButton === 'CAMPAIGN MEME' ? 'text-black' : 'text-gray-300'}`}
            onClick={() => setActiveButton('CAMPAIGN MEME')}
          >
            CAMPAIGN MEME
          </button>
          <button
            className={`handwriting text-xl ${activeButton === 'REGISTER SHILLER' ? 'text-black' : 'text-gray-300'}`}
            onClick={() => setActiveButton('REGISTER SHILLER')}
          >
            REGISTER SHILLER
          </button>
        </div>

        {/* old button with correct styles */}
        {/* <button className="bg-yellow-300 hover:bg-yellow-400 text-black py-2 px-6 rounded-full border border-black handwriting text-4xl">
          CONNECT WALLET
        </button> */}


          <div className="relative z-20">
          <ConnectButton />

          </div>
      
      </div>

  

      <Image
        src="/nav/nav-bottom.png"
        alt="nav-bottom"
        width={1000}
        height={100}
        style={{width: "100vw", position: 'absolute', zIndex:"0", top:"-20px"}}
        priority
      />
    </div>
  );
};

export default NavBar;
