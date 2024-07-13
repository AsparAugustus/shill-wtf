import React from 'react';
import { useAccount, useWriteContract } from 'wagmi';

const Button = ({setisLoading, isLoading}) => {
    const account = useAccount();
    const writeContract = useWriteContract({
        mutation: {
          onError: (error) => {
            setisLoading(false);
            toast.error(error.message);
          },
          onSuccess: (hash) => {
            setisLoading(false);
            setcurrentModalPage(0);
            toast.success("Token created");
            onRequestClose();
            // onCompleted();
            // incrementLensHubOnchainSigNonce();
            // addTransaction(generateOptimisticPublication({ txHash: hash }));
          },
        },
      });


    const handleButtonClick = async () => {
        try {
    
            const result = await writeContract('contractAddress', 'methodName', ['param1', 'param2'], { from: account });
            
       
            console.log(result);
        } catch (error) {
           
            console.error(error);
        }
    };

    return (
        <button onClick={() => {handleButtonClick}}>
            Call Smart Contract
        </button>
    );
};

export default Button;
