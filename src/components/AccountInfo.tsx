
import React, { useEffect, useState } from 'react';
import makeBlockie from 'ethereum-blockies-base64';
import { getEnsNameOrAddress } from '../utils/web3';
import { ETHERSCAN_ADDRESS_LINK } from '../constants';
import { NetworkBadge } from '.';

interface AccountProps { 
    address: string;
  }

export const AccountInfo = (props: AccountProps) => {
    const [loading, setLoading] = useState(true);
    const [address, setAddress] = useState("");

    useEffect(() => { 
        async function asyncEffect() { 
            const addressOrName = await getEnsNameOrAddress(props.address, true);
            
            setAddress(addressOrName);
            setLoading(false);
        }

        asyncEffect();
    }, [props.address])

    if (loading) {
        return <></>
    }
    
    return (
        <div>
            <NetworkBadge />
            <small className="mr-2 text-muted">
                <a href={ETHERSCAN_ADDRESS_LINK + props.address} target="_blank" rel="noopener noreferrer">
                    {address}
                </a>
            </small>
            <img className="rounded address-icon" src={makeBlockie(props.address)} alt={props.address} />
        </div>
    )
}