
import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { getNetworkColor, getNetworkName } from '../utils/styling';

interface NetworkBadgeProps { 
    chainId?: number;
}

export const NetworkBadge = (props: NetworkBadgeProps) => {
    const context = useWeb3React();
    const chainId = props.chainId || context.chainId || 1;
    const networkName = getNetworkName(chainId);

    return (
        <span className={`badge badge-${getNetworkColor(networkName)} mr-1`}>{networkName}</span>
    )
}