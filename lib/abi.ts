export const verifierAbi = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_registry",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_eas",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_easSchema",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "claimIdentity",
        "inputs": [
            {
                "name": "identity",
                "type": "bytes8",
                "internalType": "bytes8"
            },
            {
                "name": "data",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "revokeIdentity",
        "inputs": [
            {
                "name": "identity",
                "type": "bytes8",
                "internalType": "bytes8"
            },
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "verifyIdentity",
        "inputs": [
            {
                "name": "identity",
                "type": "bytes8",
                "internalType": "bytes8"
            },
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "error",
        "name": "IdentityAlreadyIssued",
        "inputs": []
    },
    {
        "type": "error",
        "name": "IdentityNotIssued",
        "inputs": []
    },
    {
        "type": "error",
        "name": "IrrevocableIdentity",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ResolverIssueFail",
        "inputs": []
    }
]

export const registryABI = [
    {
        "type": "function",
        "name": "register",
        "inputs": [
            {
                "name": "identity",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes8",
                "internalType": "bytes8"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "resolve",
        "inputs": [
            {
                "name": "identity",
                "type": "bytes8",
                "internalType": "bytes8"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "event",
        "name": "IdentityRegistered",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "",
                "type": "bytes8",
                "indexed": true,
                "internalType": "bytes8"
            }
        ],
        "anonymous": false
    }
]

export const spotifyResolverABI = [
    {
        "type": "constructor",
        "inputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "issue",
        "inputs": [
            {
                "name": "recipient",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "data",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "revoke",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "pure"
    },
    {
        "type": "function",
        "name": "updateOwner",
        "inputs": [
            {
                "name": "newOwner",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "userData",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "verify",
        "inputs": [
            {
                "name": "recipient",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    }
]