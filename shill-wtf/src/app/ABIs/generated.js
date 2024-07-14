//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ShillCore
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xc7d1750cb48875373773611e6dfe3b15ee78ee61)
 */
export const shillCoreAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract Token', type: 'address' },
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract Token', type: 'address' },
      { name: 'shiller', internalType: 'address', type: 'address' },
    ],
    name: 'claimable',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'results',
        internalType: 'struct ShillCore.EpochResults[]',
        type: 'tuple[]',
        components: [
          { name: 'token', internalType: 'contract Token', type: 'address' },
          { name: 'shillers', internalType: 'address[]', type: 'address[]' },
          { name: 'rewards', internalType: 'uint256[]', type: 'uint256[]' },
        ],
      },
    ],
    name: 'closeEpoch',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
      { name: 'supply', internalType: 'uint256', type: 'uint256' },
      { name: 'handle', internalType: 'string', type: 'string' },
      { name: 'tokenLiquidity', internalType: 'uint256', type: 'uint256' },
      { name: 'shillReserve', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createTokenAndStartCampaign',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract Token', type: 'address' },
    ],
    name: 'launch',
    outputs: [],
    stateMutability: 'nonpayable',
  },
]

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xc7d1750cb48875373773611e6dfe3b15ee78ee61)
 */
export const shillCoreAddress = {
  11155111: '0xc7D1750Cb48875373773611e6dfe3b15EE78ee61',
}

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xc7d1750cb48875373773611e6dfe3b15ee78ee61)
 */
export const shillCoreConfig = {
  address: shillCoreAddress,
  abi: shillCoreAbi,
}
