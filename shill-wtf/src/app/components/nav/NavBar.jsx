"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/navigation';


const NavBar = () => {
  const [activeButton, setActiveButton] = useState('');

  const router = useRouter();

  return (
    <div>
      <div 
      className="flex justify-between pt-4 px-10 bg-white w-full "
      styles={{ zIndex: "5", position: "relative", paddingBottom: "-20px"}}>
        <button onClick={() => {router.push("/")}} className="text-4xl relative z-20 text-black">SHILL . WTF</button>

        <div className="flex items-center space-x-8 relative z-20">
          <button
            className={`handwriting text-xl ${activeButton === 'CAMPAIGN MEME' ? 'text-black' : 'text-gray-300'}`}
            onClick={() => {
              setActiveButton('CAMPAIGN MEME');
              router.push('/Create-Campaign');
            }}
          >
            START CAMPAIGN
          </button>
          <button
            className={`handwriting text-xl ${activeButton === 'REGISTER SHILLER' ? 'text-black' : 'text-gray-300'}`}
            onClick={() => {
              setActiveButton('REGISTER SHILLER');
              router.push('/Register-Shiller');
            }}
            >
            REGISTER SHILLER
          </button>

          <button
            className={`handwriting text-xl ${activeButton === 'Dashboard' ? 'text-black' : 'text-gray-300'}`}
            onClick={() => {
              setActiveButton('Dashboard');
              router.push('/Dashboard');
            }}
            >
            DASHBOARD
          </button>
        </div>

        {/* old button with correct styles */}
        {/* <button className="bg-yellow-300 hover:bg-yellow-400 text-black py-2 px-6 rounded-full border border-black handwriting text-4xl">
          CONNECT WALLET
        </button> */}


          <div className="relative z-20">
          {/* <ConnectButton /> */}



          <ConnectButton.Custom>
  {({
    account,
    chain,
    openAccountModal,
    openChainModal,
    openConnectModal,
    authenticationStatus,
    mounted,
  }) => {
    const ready = mounted && authenticationStatus !== 'loading';
    const connected =
      ready &&
      account &&
      chain &&
      (!authenticationStatus || authenticationStatus === 'authenticated');

    return (
      <div
        {...(!ready && {
          'aria-hidden': true,
          style: {
            opacity: 0,
            pointerEvents: 'none',
            userSelect: 'none',
          },
        })}
      >
        {(() => {
          if (!connected) {
            return (
              <button
                onClick={openConnectModal}
                type="button"
                className="bg-yellow-300 hover:bg-yellow-400 text-black py-2 px-6 rounded-full border border-black handwriting text-2xl"
              >
                CONNECT WALLET
              </button>
            );
          }

          if (chain.unsupported) {
            return (
              <button
                onClick={openChainModal}
                type="button"
                className="bg-yellow-300 hover:bg-yellow-400 text-black py-2 px-6 rounded-full border border-black handwriting text-2xl"
              >
                Wrong network
              </button>
            );
          }

          return (
            <div style={{ display: 'flex', gap: 12 }}>
              <button
                onClick={openChainModal}
                style={{ display: 'flex', alignItems: 'center' }}
                type="button"
                className="bg-yellow-300 hover:bg-yellow-400 text-black py-2 px-6 rounded-full border border-black handwriting text-2xl"
              >
                {chain.hasIcon && (
                  <div
                    style={{
                      background: chain.iconBackground,
                      width: 12,
                      height: 12,
                      borderRadius: 999,
                      overflow: 'hidden',
                      marginRight: 4,
                    }}
                  >
                    {chain.iconUrl && (
                      <img
                        alt={chain.name ?? 'Chain icon'}
                        src={chain.iconUrl}
                        style={{ width: 12, height: 12 }}
                      />
                    )}
                  </div>
                )}
                {chain.name}
              </button>

              <button
                onClick={openAccountModal}
                type="button"
                className="bg-yellow-300 hover:bg-yellow-400 text-black py-2 px-6 rounded-full border border-black handwriting text-2xl"
              >
                {account.displayName}
                {account.displayBalance
                  ? ` (${account.displayBalance})`
                  : ''}
              </button>
            </div>
          );
        })()}
      </div>
    );
  }}
</ConnectButton.Custom>














          </div>
      
      </div>

  

      <Image
        src="/nav/nav-bottom.png"
        alt="nav-bottom"
        width={1000}
        height={100}
        style={{width: "100vw", position: 'absolute', zIndex:"1", top:"-32px"}}
        priority
      />
    </div>
  );
};

export default NavBar;
