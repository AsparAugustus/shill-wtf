"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/navigation';


const NavBar = () => {
  const [activeButton, setActiveButton] = useState('REGISTER SHILLER');

  const router = useRouter();

  return (
    <div>
      <div 
      
      className="flex justify-between pt-4 px-10 bg-white w-full relative"
      styles={{ zIndex: "5", position: "relative" }}>
        <button className="text-4xl relative z-20 text-black"
          onClick={() => {router.push('/')}}
        >SHILL . WTF</button>

        <div className="flex items-center space-x-8 relative z-20">
          <button
            className={`handwriting text-xl ${activeButton === 'CAMPAIGN MEME' ? 'text-black' : 'text-gray-300'}`}
            onClick={() => {
              setActiveButton('CAMPAIGN MEME');
              router.push('/Create-Campaign');
            }}
          >
            CAMPAIGN MEME
          </button>
          <button
            className={`handwriting text-xl ${activeButton === 'REGISTER SHILLER' ? 'text-black' : 'text-gray-300'}`}
            onClick={() => {
              setActiveButton('REGISTER SHILLER');
              router.push('/Create-Campaign');
            }}
            >
            REGISTER SHILLER
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
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button onClick={openConnectModal} type="button">
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
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

                  <button onClick={openAccountModal} type="button">
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
        style={{width: "100vw", position: 'absolute', zIndex:"0", top:"-20px"}}
        priority
      />
    </div>
  );
};

export default NavBar;
