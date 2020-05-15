import ALL_PROJECT_DATA from "../data/projects";
import { Contract } from "../types";

export async function getContracts(): Promise<Contract[]> { 
    const contracts = new Array<Contract>();
    ALL_PROJECT_DATA.forEach(p => {
        contracts.push(...p.contracts as any as Contract[])
    });
    
    return contracts;
}

export async function getContract(address: string): Promise<Contract | undefined> { 
    const contracts = await getContracts();
    const contract = contracts.find((i: Contract) => i.addresses.find(x => x.address === address));

    return contract;
}
