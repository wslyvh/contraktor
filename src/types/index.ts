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

export type Address = {
    address: string,
    network: "mainnet" | "ropsten" | "rinkeby" | "kovan" | "goerli"
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