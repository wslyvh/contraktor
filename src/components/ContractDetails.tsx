
import React, { useState, useEffect } from 'react';
import { Contract } from '../types';
import { BalanceCard } from './BalanceCard';
import { TransactionCard } from './TransactionCard';
import { ETHERSCAN_ADDRESS_LINK } from '../constants';
import { ethers } from 'ethers';
import { Loading } from '.';
import { parseAddress } from '../utils/web3';

interface ContractProps { 
  currentAddress: string;
  contract?: Contract;
}

export const ContractDetails = (props: ContractProps) => {
  const [loading, setLoading] = useState(true);
  const [contract, setContract] = useState<Contract | undefined>(undefined);
  
  const parseContract = async () => { 
    const contract = ethers
    
    // setContract(contract);   
    setLoading(false);
  }

  useEffect(() => {
    parseContract();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  if (loading) { 
    return <Loading />
  } 

  return (
    <>
      <div>
        <h2>
          {props.contract?.name} 
          <small className="ml-2">
            <a href={`${ETHERSCAN_ADDRESS_LINK}${props.currentAddress}`} target="_blank" rel="noopener noreferrer" className="small text-muted" title={props.currentAddress}>
              {parseAddress(props.currentAddress)}
            </a>
          </small>
        </h2>

        <div className="card-deck">
          <BalanceCard address={props.currentAddress} />
          <TransactionCard address={props.currentAddress} />
        </div>

        {/* <div className="row">
          Current state
        </div> */}
      </div>
    </>
  );
}