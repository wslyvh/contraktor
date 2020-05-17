
import React from 'react';
import makeBlockie from 'ethereum-blockies-base64';
import { parseAddress } from '../utils/web3';
import { ETHERSCAN_ADDRESS_LINK } from '../constants';
import { useWeb3React } from '@web3-react/core';
import { NetworkBadge } from '.';

export const AccountInfo = () => {
    const context = useWeb3React();
    const address = context.account || "";

    let networkRender;
    if (context?.chainId !== 1) { 
        networkRender = <NetworkBadge />
    }

    return (
        <div>
            {networkRender}
            <small className="mr-2 text-muted">
                <a href={ETHERSCAN_ADDRESS_LINK + address} target="_blank" rel="noopener noreferrer">
                    {parseAddress(address)}
                </a>
            </small>
            <img className="rounded address-icon" src={makeBlockie(address)} alt={address} />
        </div>
    )
}