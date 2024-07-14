//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ShillCore
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x53ee4dc54233d14274888c091234e5ed65a4d032)
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
    ],
    name: 'claimable',
    outputs: [
      {
        name: '',
        internalType: 'struct ShillCore.Reserves',
        type: 'tuple',
        components: [
          { name: 'nativeReserve', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenReserve', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
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
          {
            name: 'rewards',
            internalType: 'struct ShillCore.Reserves[]',
            type: 'tuple[]',
            components: [
              {
                name: 'nativeReserve',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'tokenReserve',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
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
    inputs: [],
    name: 'getCampaigns',
    outputs: [
      {
        name: '',
        internalType: 'struct ShillCore.Campaign[]',
        type: 'tuple[]',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'handle', internalType: 'string', type: 'string' },
          {
            name: 'reserves',
            internalType: 'struct ShillCore.Reserves',
            type: 'tuple',
            components: [
              {
                name: 'nativeReserve',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'tokenReserve',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
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
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x53ee4dc54233d14274888c091234e5ed65a4d032)
 */
export const shillCoreAddress = {
  11155111: '0x53EE4Dc54233D14274888c091234E5Ed65A4D032',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x53ee4dc54233d14274888c091234e5ed65a4d032)
 */
export const shillCoreConfig = {
  address: shillCoreAddress,
  abi: shillCoreAbi,
} as const
