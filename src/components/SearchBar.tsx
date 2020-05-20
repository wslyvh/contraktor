import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const SearchBar = () => {
    const history = useHistory();
    const [contractAddress, setContractAddress] = useState("");

    async function handleClick(e: any) {
        e.preventDefault();
        
        if (contractAddress) {
            history.push(`/contracts/${contractAddress}`);
        }
    }

    return (
        <>
            <div>
                <form>
                    <span className="small text-muted">e.g. 0xbb9bc244d798123fde783fcc1c72d3bb8c189413</span>
                    <input className="form-control" placeholder="Enter contract address.." 
                            value={contractAddress} onChange={e => setContractAddress(e.target.value)} />

                    <button type="submit" className="btn btn-info mt-3" onClick={handleClick}>Submit</button>
                </form>
            </div>
        </>
    );
}