import React, { useEffect, useState } from 'react';
import { isContractAddress } from '../utils/web3';
import { Link } from 'react-router-dom';

interface ContractValueProps { 
    value: any
}

export const ContractValue = (props: ContractValueProps) => {
    const [loading, setLoading] = useState(true);
    const [isContract, setIsContract] = useState(false);

    useEffect(() => {

        async function asyncEffect() {
            if (typeof props.value === "string") { 
                const isContract = await isContractAddress(props.value);

                setIsContract(isContract);
                setLoading(false);
            }
        }
        
        asyncEffect();
    }, [props.value]);

    if (loading) {
        return <></>
    }

    // if (isContract) { 
    //     return <Link to={`/contracts/${props.value}`}>{props.value}</Link>
    // }
    
    return (props.value.toString());
}