module.exports = [
    {
      "constant": true,
      "inputs": [],
      "name": "ASSET_DECIMALS_TRUNCATION",
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
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "exits",
      "outputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "numRanges",
          "type": "uint32"
        },
        {
          "name": "timeStart",
          "type": "uint256"
        },
        {
          "components": [
            {
              "name": "T",
              "type": "bytes"
            },
            {
              "name": "r",
              "type": "bytes"
            },
            {
              "name": "k",
              "type": "bytes"
            },
            {
              "name": "B",
              "type": "bytes"
            }
          ],
          "name": "coinsProof",
          "type": "tuple"
        },
        {
          "name": "challenge",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "_amt",
      "outputs": [
        {
          "name": "",
          "type": "uint64"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "EXIT_TIMEOUT",
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
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "blocks",
      "outputs": [
        {
          "name": "accumulator",
          "type": "bytes"
        },
        {
          "components": [
            {
              "name": "T",
              "type": "bytes"
            },
            {
              "name": "r",
              "type": "bytes"
            },
            {
              "name": "k",
              "type": "bytes"
            },
            {
              "name": "B",
              "type": "bytes"
            }
          ],
          "name": "blockProof",
          "type": "tuple"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "depositer",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "amount",
          "type": "uint64"
        },
        {
          "indexed": false,
          "name": "offset",
          "type": "uint256"
        }
      ],
      "name": "Deposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "ExitSubmit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "ExitChallenge",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "BlockSubmit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "BlockChallenge",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "encoded",
          "type": "bytes"
        }
      ],
      "name": "submitBlock",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "deposit",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "encoded",
          "type": "bytes"
        }
      ],
      "name": "cancelDeposit",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "encoded",
          "type": "bytes"
        }
      ],
      "name": "startExit",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "exitIndex",
          "type": "uint256"
        }
      ],
      "name": "cancelExit",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "exitIndex",
          "type": "uint256"
        }
      ],
      "name": "finalizeExit",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "txData",
          "type": "bytes"
        },
        {
          "name": "index",
          "type": "uint64[256]"
        }
      ],
      "name": "challengeSpent",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "exitIndex",
          "type": "uint256"
        }
      ],
      "name": "requestExitProof",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "exitIndex",
          "type": "uint256"
        },
        {
          "name": "proof",
          "type": "bytes"
        }
      ],
      "name": "registerInlcusionProof",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "exitIndex",
          "type": "uint256"
        }
      ],
      "name": "challengeInvalidInclusionProof",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "exitIndex",
          "type": "uint256"
        }
      ],
      "name": "challengeInvalidExitHTP",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "prevBlock",
          "type": "uint256"
        }
      ],
      "name": "challengeInvalidBlockProof",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "index",
          "type": "uint128"
        }
      ],
      "name": "challengeInvalidPrime",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "primeCheck",
          "type": "uint128"
        }
      ],
      "name": "challengeNotPrime",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "challengeInvalidRange",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]