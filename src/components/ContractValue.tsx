import React, { useEffect, useState } from 'react';
import { isContractAddress, getEnsNameOrAddress } from '../utils/web3';
import { ETHERSCAN_ADDRESS_LINK } from '../constants';

interface ContractValueProps { 
    value: any
}

export const ContractValue = (props: ContractValueProps) => {
    const [loading, setLoading] = useState(true);
    const [isContract, setIsContract] = useState(false);
    const [accountAddress, setAccountAddress] = useState("");

    useEffect(() => {

        async function asyncEffect() {
            if (typeof props.value === "string" && props.value.length === 42) { 
                console.log("check Contract addresses")
                const isContract = await isContractAddress(props.value);

                if (isContract) {
                    setIsContract(isContract);
                }
                else { 
                    const nameOrAddress = await getEnsNameOrAddress(props.value);
                    setAccountAddress(nameOrAddress);
                }
            }
            
            setLoading(false);
        }
        
        asyncEffect();
    }, [props.value]);

    if (loading) {
        return <></>
    }

    if (isContract) { 
        return (<>
            <a className="text-info" href={`/contracts/${props.value}`}>{props.value}</a>
            <small className="ml-1">(contract)</small>
        </>)
    }

    if (accountAddress) { 
        return (
            <a href={ETHERSCAN_ADDRESS_LINK + accountAddress} target="_blank" rel="noopener noreferrer">
                {accountAddress}
            </a>
        )
    }
    
    return (props.value.toString());
}