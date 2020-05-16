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
                    <span className="small text-muted">e.g. 0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e</span>
                    <input className="form-control" placeholder="Enter contract address.." 
                            value={contractAddress} onChange={e => setContractAddress(e.target.value)} />

                    <button type="submit" className="btn btn-info mt-3" onClick={handleClick}>Submit</button>
                </form>
            </div>
        </>
    );
}