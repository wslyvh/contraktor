
import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Address } from '../types';
import { getNetworkColor, getNetworkName, getEtherscanLink } from '../utils/styling';
import { parseAddress } from '../utils/web3';

declare let window: any;
declare let document: any;

interface NetworkAddressesProps { 
    availableAddresses: Array<Address>
}

export const NetworkAddresses = (props: NetworkAddressesProps) => {
    const context = useWeb3React();
    const [currentNetwork, setCurrentNetwork] = useState("");
    const [screenSize, setScreenSize] = useState(768);

    useEffect(() => {
        setScreenSize(window.innerWidth);

        let networkName = "mainnet";
        if (context.chainId) {
            networkName = getNetworkName(context.chainId);
        }

        setCurrentNetwork(networkName);
    }, [context.chainId]);

    const renderListItems = props.availableAddresses.map(i => 
        <li key={i.address} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <a href={getEtherscanLink(i)} className="text-info" target="_blank" rel="noopener noreferrer">{screenSize < 768 ? parseAddress(i.address) : i.address}</a> {i.network === currentNetwork ? "(current)" : ""}
            </div>
            <span key={i.network} className={`badge badge-${getNetworkColor(i.network)} ml-1`}>{i.network}</span>
        </li>
    );

    return (
        <>
        <h3>Other networks</h3>
        <ul className="list-group">
            {renderListItems}
        </ul>
        </>
    )
}