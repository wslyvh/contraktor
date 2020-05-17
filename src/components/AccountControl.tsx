
import React from 'react';
import { AccountInfo } from './AccountInfo';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

declare let window: any

export const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
});

export const AccountControl = () => {
    const context = useWeb3React();
        
    async function connectWeb3() {
        try { 
            await context.activate(injected, undefined, true);
        } catch (error) {
            console.log(error)
        }
    }

    if (context.account) { 
        return <AccountInfo address={context.account} /> 
    }

    return <button type="button" className="btn btn-outline-info btn-sm" onClick={connectWeb3}>Connect</button>
}