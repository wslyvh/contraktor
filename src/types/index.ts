export type Project = { 
    name: string;
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