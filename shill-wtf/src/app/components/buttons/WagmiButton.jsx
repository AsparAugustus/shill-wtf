"use client"
import React from 'react';
import { useAccount, useWriteContract } from 'wagmi';
import {shillCoreAbi, shillCoreAddress} from '../.././ABIs/generated'
import toast from "react-hot-toast";

const WagmiButton = ({setisLoading = null, isLoading = null}) => {
    const account = useAccount();
    const { writeContractAsync } = useWriteContract({
        mutation: {
          onError: (error) => {
            // setisLoading(false);
            toast.error(error.message);
            console.log("error", error);
          },
          onSuccess: (hash) => {
            console.log("success", hash);
            // setisLoading(false);
            // setcurrentModalPage(0);
            toast.success("Token created");
            // onRequestClose();
            // onCompleted();
            // incrementLensHubOnchainSigNonce();
            // addTransaction(generateOptimisticPublication({ txHash: hash }));
          },
        },
      });


    const handleButtonClick = async () => {
        try {
    
            writeContractAsync({ 
              abi : shillCoreAbi,
              address: shillCoreAddress[11155111],
              functionName: 'createTokenAndStartCampaign',
              args: [
                'MyToken',
                'MTK',
                1000000,
                'my-campaign',
                1000,
                5000,
              ],
           })
            
       
       
        } catch (error) {
           
            console.error(error);
        }
    };

    return (
      <button
        onClick={() => 
          handleButtonClick()
        }
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Call Smart Contract
      </button>
    );
};

export default WagmiButton;
