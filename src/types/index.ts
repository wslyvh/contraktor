import { Provider } from "ethers/providers"
import { ethers, Signer } from "ethers"

export type Project = { 
    name: string;
    logoPath: string;
    contracts: Array<Contract>;
}

export type Contract = {
    name: string,
    abi: string,
    addresses: Array<Address>
}

export type FullContractWrapper = {
    name: string,
    abi: string,
    address: string,
    availableAddresses: Array<Address>
    provider: Signer | Provider,
    ethersContract: ethers.Contract
}

export type Address = {
    address: string,
    network: "mainnet" | "ropsten" | "rinkeby" | "kovan" | "goerli" | "xdai"
}

export type Transaction = { 
    blockHash: string,
    blockNumber: number,
    from: string,
    to: string,
    hash: string,
    timestamp: number,
    value: number
}