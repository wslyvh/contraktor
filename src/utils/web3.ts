import { ethers } from "ethers";
import { BaseProvider } from "ethers/providers";

export async function isContractAddress(address: string): Promise<boolean> {
    try {
        const getAddress = ethers.utils.getAddress(address);
        const provider = getProvider();
        const code = await provider.getCode(getAddress);

        if (code !== '0x') {
            return true;
        }
    } catch (ex) {
        console.log("Error: unable to parse address", address);
    }

    return false;
}

export function getProvider(network?: "homestead" | "rinkeby" | "ropsten" | "kovan" | "goerli"): BaseProvider { 
    if (network) {
        return ethers.getDefaultProvider(network);
    }

    return ethers.getDefaultProvider();
}