
import React, { useState, useEffect } from 'react';
import { AccountInfo } from './AccountInfo';

declare let window: any

export const AccountControl = () => {
    const [address, setAddress] = useState("");
  
    useEffect(() => {
        if (window.ethereum?.selectedAddress) { 
            const address = window.ethereum.selectedAddress;
            
            setAddress(address);
        }    
    }, []);
      
    async function connectWeb3() {
        if (window.ethereum) { 
            try {
                const address = await window.ethereum.enable();
                setAddress(address);
            } catch (error) {
                console.log(error);
            }
        } 
    }

    if (address) { 
        return <AccountInfo address={address} /> 
    }

    return <button type="button" className="btn btn-outline-info btn-sm" onClick={connectWeb3}>Connect</button>
}