
import React from 'react';
import { AccountInfo } from './AccountInfo';

export const AccountControl = () => {
    const userAddress = "0x039AE2898D257f4c9D7E381D478EE1ed042Fe2f4";

    if (userAddress) { 
        return <AccountInfo address={userAddress} />
    }

    return <button type="button" className="btn btn-outline-info btn-sm">Connect</button>
}