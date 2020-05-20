import ALL_PROJECT_DATA from "../data/projects";
import { Contract, Transaction } from "../types";
import { ETHERSCAN_API_KEY } from "../constants";
import { isContractAddress } from "../utils/web3";
import { BaseProvider } from "ethers/providers";

export async function getContracts(): Promise<Contract[]> { 
    const contracts = new Array<Contract>();
    ALL_PROJECT_DATA.forEach(p => {
        contracts.push(...p.contracts as any as Contract[])
    });
    
    return contracts;
}

export async function getContract(address: string, provider?: BaseProvider): Promise<Contract | undefined> { 
    const isValidAddress = await isContractAddress(address, provider);
    if (!isValidAddress) { 
        console.log("No valid contract address", address);
        return;
    }

    const contracts = await getContracts();
    let networkName = "mainnet"
    if (provider) { 
        const name = (await provider.getNetwork()).name;
        if (name !== "homestead")
            networkName = name;
    }
    
    let contract = contracts.find((i: Contract) => i.addresses.filter(i => i.network === networkName).find(x => x.address === address));

    if (!contract) { 
        console.log("Try/get contract from address", address);
        contract = await getContractFromEtherscan(address);
    }

    return contract;
}

export async function getContractFromEtherscan(address: string): Promise<Contract | undefined> { 
    const response = await fetch(`https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${address}&apikey=${ETHERSCAN_API_KEY}`);
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

export async function getBalance(address: string): Promise<number> { 
    const response = await fetch(`https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${ETHERSCAN_API_KEY}`);
    const body = await response.json();

    if (body && body.result) {
        return body.result;
    }
    
    return 0;
}

export async function getTransactionList(address: string): Promise<number[]> { 
    const response = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&page=1&offset=2&sort=asc&apikey=${ETHERSCAN_API_KEY}`);
    const body = await response.json();

    if (body && body.result) {
        console.log("getTransactionList", body.result);
    }

    return [1, 2, 3];
}

export async function getLatestTransaction(address: string): Promise<Transaction | undefined> { 
    const response = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&page=1&offset=1&sort=desc&apikey=${ETHERSCAN_API_KEY}`);
    const body = await response.json();

    if (body && body.result?.[0]) {
        const tx = body.result[0];

        return {
            blockHash: tx.blockHash,
            blockNumber: Number(tx.blockNumber),
            from: tx.from,
            to: tx.to,
            hash: tx.hash,
            timestamp: Number(tx.timeStamp),
            value: Number(tx.value)
        } as Transaction
    }

    return undefined;
}