export default [
  {
    inputs: [
      {
        internalType: "contract RealDigital",
        name: "token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "KeyRequested",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_taxId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_bankNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_account",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_branch",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "addAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "authorizeKey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "getCustomerData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "taxId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "bankNumber",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "account",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "branch",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
          {
            internalType: "bool",
            name: "registered",
            type: "bool",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct KeyDictionary.CustomerData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "getKey",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "getWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_taxId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_bankNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_account",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_branch",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "requestKey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_taxId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_bankNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_account",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_branch",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "updateData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
