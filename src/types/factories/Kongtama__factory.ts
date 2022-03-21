/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Kongtama } from "../Kongtama";

export class Kongtama__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    owner: string,
    proxyRegistryAddress: string,
    price: BigNumberish,
    maxMint: BigNumberish,
    baseMetadataURI: string,
    overrides?: Overrides
  ): Promise<Kongtama> {
    return super.deploy(
      owner,
      proxyRegistryAddress,
      price,
      maxMint,
      baseMetadataURI,
      overrides || {}
    ) as Promise<Kongtama>;
  }
  getDeployTransaction(
    owner: string,
    proxyRegistryAddress: string,
    price: BigNumberish,
    maxMint: BigNumberish,
    baseMetadataURI: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      owner,
      proxyRegistryAddress,
      price,
      maxMint,
      baseMetadataURI,
      overrides || {}
    );
  }
  attach(address: string): Kongtama {
    return super.attach(address) as Kongtama;
  }
  connect(signer: Signer): Kongtama__factory {
    return super.connect(signer) as Kongtama__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Kongtama {
    return new Contract(address, _abi, signerOrProvider) as Kongtama;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "proxyRegistryAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxMint",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "baseMetadataURI",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "mintsPerWallet",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newPrice",
        type: "uint256",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMaxMint",
        type: "uint256",
      },
    ],
    name: "setMaxMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMaxMintPerWallet",
        type: "uint256",
      },
    ],
    name: "setMaxMintPerWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newProxyRegistryAddress",
        type: "address",
      },
    ],
    name: "setProxyRegistryAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newBaseMetadataURI",
        type: "string",
      },
    ],
    name: "setBaseMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaxMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaxMintperWallet",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600a80553480156200001557600080fd5b506040516200245f3803806200245f833981016040819052620000389162000210565b604051806040016040528060088152602001674b6f6e6774616d6160c01b815250604051806040016040528060048152602001634b6f6e6760e01b815250866200008881620000fd60201b60201c565b5081516200009e9060019060208501906200014d565b508051620000b49060029060208401906200014d565b50505060088390556009829055600780546001600160a01b0319166001600160a01b0386161790558051620000f190600b9060208401906200014d565b50505050505062000376565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280546200015b9062000323565b90600052602060002090601f0160209004810192826200017f5760008555620001ca565b82601f106200019a57805160ff1916838001178555620001ca565b82800160010185558215620001ca579182015b82811115620001ca578251825591602001919060010190620001ad565b50620001d8929150620001dc565b5090565b5b80821115620001d85760008155600101620001dd565b80516001600160a01b03811681146200020b57600080fd5b919050565b600080600080600060a0868803121562000228578081fd5b6200023386620001f3565b9450602062000244818801620001f3565b6040880151606089015160808a015192975090955093506001600160401b038082111562000270578384fd5b818901915089601f83011262000284578384fd5b81518181111562000299576200029962000360565b604051601f8201601f19908116603f01168101908382118183101715620002c457620002c462000360565b816040528281528c86848701011115620002dc578687fd5b8693505b82841015620002ff5784840186015181850187015292850192620002e0565b828411156200031057868684830101525b8096505050505050509295509295909350565b6002810460018216806200033857607f821691505b602082108114156200035a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6120d980620003866000396000f3fe6080604052600436106101b75760003560e01c8063715018a6116100ec578063afdf61341161008a578063d26ea6c011610064578063d26ea6c0146104ae578063d317f967146104ce578063e985e9c5146104e3578063f2fde38b14610503576101b7565b8063afdf61341461044e578063b88d4fde1461046e578063c87b56dd1461048e576101b7565b806391b7f5ed116100c657806391b7f5ed146103e457806395d89b411461040457806398d5fdca14610419578063a22cb4651461042e576101b7565b8063715018a61461039a5780637e518ec8146103af5780638da5cb5b146103cf576101b7565b80633ccfd60b116101595780634d0df5fc116101335780634d0df5fc1461030d578063547520fe1461033a5780636352211e1461035a57806370a082311461037a576101b7565b80633ccfd60b146102c557806340c10f19146102da57806342842e0e146102ed576101b7565b8063095ea7b311610195578063095ea7b3146102415780630e89341c146102635780631f46452f1461028357806323b872dd146102a5576101b7565b806301ffc9a7146101bc57806306fdde03146101f2578063081812fc14610214575b600080fd5b3480156101c857600080fd5b506101dc6101d7366004611789565b610523565b6040516101e991906119a9565b60405180910390f35b3480156101fe57600080fd5b5061020761056b565b6040516101e991906119b4565b34801561022057600080fd5b5061023461022f366004611823565b6105fd565b6040516101e99190611958565b34801561024d57600080fd5b5061026161025c36600461175e565b610649565b005b34801561026f57600080fd5b5061020761027e366004611823565b6106e1565b34801561028f57600080fd5b50610298610765565b6040516101e99190611f15565b3480156102b157600080fd5b506102616102c0366004611670565b61076b565b3480156102d157600080fd5b506102616107a3565b6102616102e836600461175e565b6107e6565b3480156102f957600080fd5b50610261610308366004611670565b610939565b34801561031957600080fd5b5061032d61032836600461161c565b610954565b6040516101e99190611f1e565b34801561034657600080fd5b50610261610355366004611823565b610969565b34801561036657600080fd5b50610234610375366004611823565b6109ad565b34801561038657600080fd5b5061029861039536600461161c565b6109e2565b3480156103a657600080fd5b50610261610a26565b3480156103bb57600080fd5b506102616103ca3660046117dd565b610a71565b3480156103db57600080fd5b50610234610ac3565b3480156103f057600080fd5b506102616103ff366004611823565b610ad2565b34801561041057600080fd5b50610207610b16565b34801561042557600080fd5b50610298610b25565b34801561043a57600080fd5b5061026161044936600461172d565b610b2b565b34801561045a57600080fd5b50610261610469366004611823565b610b3d565b34801561047a57600080fd5b506102616104893660046116b0565b610b81565b34801561049a57600080fd5b506102076104a9366004611823565b610bc0565b3480156104ba57600080fd5b506102616104c936600461161c565b610c43565b3480156104da57600080fd5b50610298610ca4565b3480156104ef57600080fd5b506101dc6104fe366004611638565b610caa565b34801561050f57600080fd5b5061026161051e36600461161c565b610d60565b60006001600160e01b031982166380ac58cd60e01b148061055457506001600160e01b03198216635b5e139f60e01b145b80610563575061056382610dce565b90505b919050565b60606001805461057a90611fcc565b80601f01602080910402602001604051908101604052809291908181526020018280546105a690611fcc565b80156105f35780601f106105c8576101008083540402835291602001916105f3565b820191906000526020600020905b8154815290600101906020018083116105d657829003601f168201915b5050505050905090565b600061060882610de7565b61062d5760405162461bcd60e51b815260040161062490611d37565b60405180910390fd5b506000908152600560205260409020546001600160a01b031690565b6000610654826109ad565b9050806001600160a01b0316836001600160a01b031614156106885760405162461bcd60e51b815260040161062490611e83565b806001600160a01b031661069a610e04565b6001600160a01b031614806106b657506106b6816104fe610e04565b6106d25760405162461bcd60e51b815260040161062490611c12565b6106dc8383610e08565b505050565b60606106ec82610de7565b6107085760405162461bcd60e51b815260040161062490611d83565b6000600b805461071790611fcc565b9050116107335760405180602001604052806000815250610563565b600b61073e83610e76565b60405160200161074f9291906118b2565b6040516020818303038152906040529050919050565b60095490565b61077c610776610e04565b82610f99565b6107985760405162461bcd60e51b815260040161062490611ec4565b6106dc838383611016565b6107ab610ac3565b6001600160a01b03166108fc479081150290604051600060405180830381858888f193505050501580156107e3573d6000803e3d6000fd5b50565b6009548111156108085760405162461bcd60e51b815260040161062490611dc8565b6000610812610ac3565b9050600061081e610e04565b600854909150346001600160a01b03808416908516141561084c576108438686611149565b50505050610935565b8181101561086c5760405162461bcd60e51b815260040161062490611b56565b600a546001600160a01b0384166000908152600c602052604090205460ff16106108a85760405162461bcd60e51b815260040161062490611b7b565b6001600160a01b0383166000908152600c602052604081208054600192906108d490849060ff16611f50565b92506101000a81548160ff021916908360ff160217905550836001600160a01b03166108fc829081150290604051600060405180830381858888f19350505050158015610925573d6000803e3d6000fd5b506109308686611149565b505050505b5050565b6106dc83838360405180602001604052806000815250610b81565b600c6020526000908152604090205460ff1681565b610971610e04565b6001600160a01b0316610982610ac3565b6001600160a01b0316146109a85760405162461bcd60e51b815260040161062490611dff565b600955565b6000818152600360205260408120546001600160a01b0316806105635760405162461bcd60e51b815260040161062490611cb9565b60006001600160a01b038216610a0a5760405162461bcd60e51b815260040161062490611c6f565b506001600160a01b031660009081526004602052604090205490565b610a2e610e04565b6001600160a01b0316610a3f610ac3565b6001600160a01b031614610a655760405162461bcd60e51b815260040161062490611dff565b610a6f6000611163565b565b610a79610e04565b6001600160a01b0316610a8a610ac3565b6001600160a01b031614610ab05760405162461bcd60e51b815260040161062490611dff565b805161093590600b90602084019061150d565b6000546001600160a01b031690565b610ada610e04565b6001600160a01b0316610aeb610ac3565b6001600160a01b031614610b115760405162461bcd60e51b815260040161062490611dff565b600855565b60606002805461057a90611fcc565b60085490565b610935610b36610e04565b83836111b3565b610b45610e04565b6001600160a01b0316610b56610ac3565b6001600160a01b031614610b7c5760405162461bcd60e51b815260040161062490611dff565b600a55565b610b92610b8c610e04565b83610f99565b610bae5760405162461bcd60e51b815260040161062490611ec4565b610bba84848484611256565b50505050565b6060610bcb82610de7565b610be75760405162461bcd60e51b815260040161062490611e34565b6000610bf1611289565b90506000815111610c115760405180602001604052806000815250610c3c565b80610c1b84610e76565b604051602001610c2c929190611883565b6040516020818303038152906040525b9392505050565b610c4b610e04565b6001600160a01b0316610c5c610ac3565b6001600160a01b031614610c825760405162461bcd60e51b815260040161062490611dff565b600780546001600160a01b0319166001600160a01b0392909216919091179055565b600a5490565b60075460405163c455279160e01b81526000916001600160a01b039081169190841690829063c455279190610ce3908890600401611958565b60206040518083038186803b158015610cfb57600080fd5b505afa158015610d0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d3391906117c1565b6001600160a01b03161415610d4c576001915050610d5a565b610d56848461129b565b9150505b92915050565b610d68610e04565b6001600160a01b0316610d79610ac3565b6001600160a01b031614610d9f5760405162461bcd60e51b815260040161062490611dff565b6001600160a01b038116610dc55760405162461bcd60e51b815260040161062490611a19565b6107e381611163565b6001600160e01b031981166301ffc9a760e01b14919050565b6000908152600360205260409020546001600160a01b0316151590565b3390565b600081815260056020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610e3d826109ad565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b606081610e9b57506040805180820190915260018152600360fc1b6020820152610566565b8160005b8115610ec55780610eaf81612007565b9150610ebe9050600a83611f75565b9150610e9f565b60008167ffffffffffffffff811115610eee57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610f18576020820181803683370190505b5090505b8415610f9157610f2d600183611f89565b9150610f3a600a86612022565b610f45906030611f38565b60f81b818381518110610f6857634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350610f8a600a86611f75565b9450610f1c565b949350505050565b6000610fa482610de7565b610fc05760405162461bcd60e51b815260040161062490611bc6565b6000610fcb836109ad565b9050806001600160a01b0316846001600160a01b031614806110065750836001600160a01b0316610ffb846105fd565b6001600160a01b0316145b80610d565750610d568185610caa565b826001600160a01b0316611029826109ad565b6001600160a01b03161461104f5760405162461bcd60e51b815260040161062490611a5f565b6001600160a01b0382166110755760405162461bcd60e51b815260040161062490611adb565b6110808383836106dc565b61108b600082610e08565b6001600160a01b03831660009081526004602052604081208054600192906110b4908490611f89565b90915550506001600160a01b03821660009081526004602052604081208054600192906110e2908490611f38565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a46106dc8383836106dc565b6109358282604051806020016040528060008152506112c9565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b816001600160a01b0316836001600160a01b031614156111e55760405162461bcd60e51b815260040161062490611b1f565b6001600160a01b0383811660008181526006602090815260408083209487168084529490915290819020805460ff1916851515179055517f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31906112499085906119a9565b60405180910390a3505050565b611261848484611016565b61126d848484846112fc565b610bba5760405162461bcd60e51b8152600401610624906119c7565b60408051602081019091526000815290565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b6112d38383611417565b6112e060008484846112fc565b6106dc5760405162461bcd60e51b8152600401610624906119c7565b6000611310846001600160a01b03166114fe565b1561140c57836001600160a01b031663150b7a0261132c610e04565b8786866040518563ffffffff1660e01b815260040161134e949392919061196c565b602060405180830381600087803b15801561136857600080fd5b505af1925050508015611398575060408051601f3d908101601f19168201909252611395918101906117a5565b60015b6113f2573d8080156113c6576040519150601f19603f3d011682016040523d82523d6000602084013e6113cb565b606091505b5080516113ea5760405162461bcd60e51b8152600401610624906119c7565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610f91565b506001949350505050565b6001600160a01b03821661143d5760405162461bcd60e51b815260040161062490611d02565b61144681610de7565b156114635760405162461bcd60e51b815260040161062490611aa4565b61146f600083836106dc565b6001600160a01b0382166000908152600460205260408120805460019290611498908490611f38565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a4610935600083836106dc565b6001600160a01b03163b151590565b82805461151990611fcc565b90600052602060002090601f01602090048101928261153b5760008555611581565b82601f1061155457805160ff1916838001178555611581565b82800160010185558215611581579182015b82811115611581578251825591602001919060010190611566565b5061158d929150611591565b5090565b5b8082111561158d5760008155600101611592565b600067ffffffffffffffff808411156115c1576115c1612062565b604051601f8501601f19908116603f011681019082821181831017156115e9576115e9612062565b8160405280935085815286868601111561160257600080fd5b858560208301376000602087830101525050509392505050565b60006020828403121561162d578081fd5b8135610c3c81612078565b6000806040838503121561164a578081fd5b823561165581612078565b9150602083013561166581612078565b809150509250929050565b600080600060608486031215611684578081fd5b833561168f81612078565b9250602084013561169f81612078565b929592945050506040919091013590565b600080600080608085870312156116c5578081fd5b84356116d081612078565b935060208501356116e081612078565b925060408501359150606085013567ffffffffffffffff811115611702578182fd5b8501601f81018713611712578182fd5b611721878235602084016115a6565b91505092959194509250565b6000806040838503121561173f578182fd5b823561174a81612078565b915060208301358015158114611665578182fd5b60008060408385031215611770578182fd5b823561177b81612078565b946020939093013593505050565b60006020828403121561179a578081fd5b8135610c3c8161208d565b6000602082840312156117b6578081fd5b8151610c3c8161208d565b6000602082840312156117d2578081fd5b8151610c3c81612078565b6000602082840312156117ee578081fd5b813567ffffffffffffffff811115611804578182fd5b8201601f81018413611814578182fd5b610d56848235602084016115a6565b600060208284031215611834578081fd5b5035919050565b60008151808452611853816020860160208601611fa0565b601f01601f19169290920160200192915050565b60008151611879818560208601611fa0565b9290920192915050565b60008351611895818460208801611fa0565b8351908301906118a9818360208801611fa0565b01949350505050565b82546000908190600281046001808316806118ce57607f831692505b60208084108214156118ee57634e487b7160e01b87526022600452602487fd5b81801561190257600181146119135761193f565b60ff1986168952848901965061193f565b61191c8b611f2c565b885b868110156119375781548b82015290850190830161191e565b505084890196505b50505050505061194f8185611867565b95945050505050565b6001600160a01b0391909116815260200190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061199f9083018461183b565b9695505050505050565b901515815260200190565b600060208252610c3c602083018461183b565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b6020808252601c908201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604082015260600190565b60208082526024908201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526019908201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604082015260600190565b6020808252600b908201526a57726f6e672076616c756560a81b604082015260600190565b6020808252602b908201527f57616c6c65742063616e74206d696e74206d6f7265207468616e206d61784d6960408201526a1b9d14195c95d85b1b195d60aa1b606082015260800190565b6020808252602c908201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526038908201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760408201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606082015260800190565b6020808252602a908201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604082015269726f206164647265737360b01b606082015260800190565b60208082526029908201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460408201526832b73a103a37b5b2b760b91b606082015260800190565b6020808252818101527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604082015260600190565b6020808252602c908201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526025908201527f4552433732315472616461626c65237572693a204e4f4e4558495354454e545f6040820152642a27a5a2a760d91b606082015260800190565b6020808252601f908201527f546f6b656e49642069732067726561746572207468616e206d61784d696e7400604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252602f908201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60408201526e3732bc34b9ba32b73a103a37b5b2b760891b606082015260800190565b60208082526021908201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656040820152603960f91b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b90815260200190565b60ff91909116815260200190565b60009081526020902090565b60008219821115611f4b57611f4b612036565b500190565b600060ff821660ff84168060ff03821115611f6d57611f6d612036565b019392505050565b600082611f8457611f8461204c565b500490565b600082821015611f9b57611f9b612036565b500390565b60005b83811015611fbb578181015183820152602001611fa3565b83811115610bba5750506000910152565b600281046001821680611fe057607f821691505b6020821081141561200157634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561201b5761201b612036565b5060010190565b6000826120315761203161204c565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146107e357600080fd5b6001600160e01b0319811681146107e357600080fdfea2646970667358221220d688778932af377879a3ae7ff8a743490266dda8444e48f55c570d8c6d2a5ab764736f6c63430008010033";
