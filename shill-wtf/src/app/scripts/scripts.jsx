// retrieveTokenData.js
import { ethers } from 'ethers';

// Replace with your contract's address
const contractAddress = '0x21d42CC2EcDb6db2c3D9b494D8CCcb6674360912';

// Replace with your contract's ABI including the balanceOf function
const contractABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenDesc",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
      },
      {
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "tokenOfOwnerByIndex",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

// Replace with your RPC provider URL (e.g., Infura, Alchemy, or local node)
const providerUrl = 'https://sepolia.infura.io/v3/22c860fbe38642a49c3fc9631cf43006'; // Replace with your Infura project ID

export async function getTokenDescription() {

    const walletAddress = "0x7CCc00f6b2938d4cFA2012713E632Dc5c533f5C1"
  // Ensure ethers is imported correctly and provider is created properly
  const provider = new ethers.providers.JsonRpcProvider(providerUrl); // Corrected to use ethers.JsonRpcProvider directly
  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  try {
    const balance = await contract.balanceOf(walletAddress);
    console.log(`Balance of address ${walletAddress}: ${balance.toString()}`);

    if (balance.toString() === '0') {
      console.log('This wallet does not own any tokens.');
      return;
    }



    const tokenDetails = await Promise.all(
        Array.from({ length: balance }, async (_, i) => {
          const tokenId = await contract.tokenOfOwnerByIndex(walletAddress, i);
          const description = await contract.tokenDesc(tokenId);
          return { tokenId: tokenId.toString(), description };
        })
      );
    
      return tokenDetails;
  } catch (error) {
    console.error('Error retrieving token data:', error);
  }
}