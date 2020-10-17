
import React from 'react';
import { AccountInfo } from './AccountInfo';
import { useWeb3React } from '@web3-react/core';
import { useWeb3Connect } from '../utils/web3Connect';

export const AccountControl = () => {
    const context = useWeb3React();
    const [tried, connectWeb3] = useWeb3Connect(context);
    if (tried && context.account) {
        return <AccountInfo address={context.account} />
    }
    return <button type="button" className="btn btn-outline-info btn-sm" onClick={connectWeb3}>Connect</button>
}
