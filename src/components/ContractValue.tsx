import React, { useEffect, useState, useRef } from 'react';
import { isContractAddress, getEnsNameOrAddress } from '../utils/web3';
import { ETHERSCAN_ADDRESS_LINK } from '../constants';

interface ContractValueProps { 
    value: any
}

export const ContractValue = (props: ContractValueProps) => {
    const isMounted = useRef(true);
    const [loading, setLoading] = useState(true);
    const [isContract, setIsContract] = useState(false);
    const [accountAddress, setAccountAddress] = useState("");

    useEffect(() => {

        async function asyncEffect() {
            if (typeof props.value === "string" && props.value.length === 42) { 
                const isContract = await isContractAddress(props.value);

                if (isContract && isMounted.current) {
                    setIsContract(isContract);
                }
                else { 
                    const nameOrAddress = await getEnsNameOrAddress(props.value);
                    if (isMounted.current)
                        setAccountAddress(nameOrAddress);
                }
            }
            
            if (isMounted.current)
                setLoading(false);
        }
        
        asyncEffect();

        return () => { 
            isMounted.current = false;
        }
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