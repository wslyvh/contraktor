
import React from 'react';
import makeBlockie from 'ethereum-blockies-base64';
import { parseAddress } from '../utils/web3';
import { ETHERSCAN_ADDRESS_LINK } from '../constants';

interface AccountInfoProps { 
    address: string;
}

export const AccountInfo = (props: AccountInfoProps) => {

    return (
        <div>
            <small className="mr-2 text-muted">
                <a href={ETHERSCAN_ADDRESS_LINK + props.address} target="_blank" rel="noopener noreferrer">
                    {parseAddress(props.address)}
                </a>
            </small>
            <img className="rounded address-icon" src={makeBlockie(props.address)} alt={props.address} />
        </div>
    )
}