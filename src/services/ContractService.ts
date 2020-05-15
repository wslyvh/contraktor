import ALL_PROJECT_DATA from "../data/projects";
import { Contract } from "../types";

const API_KEY = "RQW7FJGXRBIHPM5EYQSVPY96Q2EV2Q9RR2"; 

export async function getContracts(): Promise<Contract[]> { 
    const contracts = new Array<Contract>();
    ALL_PROJECT_DATA.forEach(p => {
        contracts.push(...p.contracts as any as Contract[])
    });
    
    return contracts;
}

export async function getContract(address: string): Promise<Contract | undefined> { 
    const contracts = await getContracts();
    let contract = contracts.find((i: Contract) => i.addresses.find(x => x.address === address));

    if (!contract) { 
        contract = await getContractFromEtherscan(address);
    }

    return contract;
}

export async function getContractFromEtherscan(address: string): Promise<Contract | undefined> { 
    const response = await fetch(`https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${address}&apikey=${API_KEY}`);
    const body = await response.json();

    if (body && body.result) {
        return {
            name: body.result[0].ContractName,
            abi: body.result[0].ABI,
            addresses: [
				{ "network": "mainnet", "address": address }
            ]
        } as Contract;
    }

    return undefined;
}