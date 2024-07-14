import { ethers } from 'ethers';
import { connect, redisQuery } from './redis.mjs';
import dotenv from 'dotenv';

dotenv.config();

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

async function getTokenDescription(walletAddress) {
  const provider = new ethers.JsonRpcProvider(providerUrl); // Corrected to use ethers.JsonRpcProvider directly
  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  try {
    const balance = await contract.balanceOf(walletAddress);
    console.log(`Balance of address ${walletAddress}: ${balance.toString()}`);

    for (let i = 0; i < balance; i++) {
      const tokenId = await contract.tokenOfOwnerByIndex(walletAddress, i);
      const description = await contract.tokenDesc(tokenId);
      console.log(`Token ID: ${tokenId.toString()}, Description: ${description}`);
      // Save the description to Redis
      await saveToRedis(walletAddress, description);
    }
  } catch (error) {
    console.error('Error retrieving token data:', error);
  }
}

async function saveToRedis(address, twitterID) {
  try {
    console.log('start save'); 
    const result = await redisQuery('set', [address, twitterID]);
    if (result.code === 1) {
      console.log(`Saved address: ${address}, Twitter ID: ${twitterID}`);
    } else {
      console.error('Error saving data:', result.error);
    }
  } catch (err) {
    console.error('Error saving data:', err);
  }
}

async function retrieveFromRedis(address) {
  try {
    const result = await redisQuery('get', [address]);
    if (result.code === 1) {
      console.log(`Retrieved from Redis - address: ${address}, Twitter ID: ${result.data}`);
    } else {
      console.error('Error retrieving data:', result.error);
    }
  } catch (err) {
    console.error('Error retrieving data:', err);
  }
}

(async () => {
  // Connect to Redis
  const redisConnection = await connect();
  if (redisConnection.code !== 1) {
    console.error('Failed to connect to Redis:', redisConnection.error);
    return;
  }

  // Replace with the wallet address you want to query
  const walletAddress = '0x7CCc00f6b2938d4cFA2012713E632Dc5c533f5C1'; // Replace with the actual wallet address
  await getTokenDescription(walletAddress);
  console.log('done'); 

  // Verify the data from Redis
  await retrieveFromRedis(walletAddress);

  // Close Redis connection after operations
  global.redisClient.quit();
})();
