export const verifierAbi = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_verifier",
                "type": "address",
                "internalType": "address"
            },
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
                "name": "proof",
                "type": "tuple",
                "internalType": "struct WorldIDProof",
                "components": [
                    {
                        "name": "signal",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "root",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "nullifierHash",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "proof",
                        "type": "bytes",
                        "internalType": "bytes"
                    }
                ]
            },
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
