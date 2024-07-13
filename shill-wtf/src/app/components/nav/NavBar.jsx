"use client"

import React from "react";
import WagmiButton from "../buttons/WagmiButton"
import { useState } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';


const NavBar = () => {

  const [activeButton, setActiveButton] = useState('REGISTER SHILLER');



  return (
    <div className="flex justify-between pt-4 px-10 bg-white" style={{width: '100vw'}}>
      <p className="text-4xl">SHILL . WTF</p>


      <div className="flex items-center justify-center space-x-8">
      <button
        className={`handwriting text-xl ${
          activeButton === 'CAMPAIGN MEME' ? 'text-black' : 'text-gray-300'
        }`}
        onClick={() => setActiveButton('CAMPAIGN MEME')}
      >
        CAMPAIGN MEME
      </button>
      <button
        className={`handwriting text-xl ${
          activeButton === 'REGISTER SHILLER' ? 'text-black' : 'text-gray-300'
        }`}
        onClick={() => setActiveButton('REGISTER SHILLER')}
      >
        REGISTER SHILLER
      </button>
    </div>


      {/* <button className="bg-yellow-300 hover:bg-yellow-400
       text-black py-2 px-6 rounded-full border border-black handwriting text-3xl">
        CONNECT WALLET
    </button> */}

    <ConnectButton />
    </div>
  );
};

export default NavBar;
