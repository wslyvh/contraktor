
import React, { useState } from 'react';
import { Contract } from '../types';
import { BalanceCard } from './BalanceCard';
import { TransactionCard } from './TransactionCard';
import { ETHERSCAN_ADDRESS_LINK } from '../constants';

interface ContractProps { 
  currentAddress: string;
  contract?: Contract;
}

export const ContractDetails = (props: ContractProps) => {
  // const [contract, setContract] = useState<Contract | undefined>(undefined);
  
  return (
    <>
      <div>
        <h2>
          {props.contract?.name} 
          <small className="ml-2">
            <a href={`${ETHERSCAN_ADDRESS_LINK}${props.currentAddress}`} target="_blank" rel="noopener noreferrer" className="small text-info">{props.currentAddress}</a>
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