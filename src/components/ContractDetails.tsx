
import React from 'react';
import { Contract } from '../types';

interface ContractProps { 
  contract?: Contract;
}

export const ContractDetails = (props: ContractProps) => {

  return (
    <>
      <div>
        <h2>Contract</h2>
        <h3 className="text-muted small"><small>{props.contract?.name}</small></h3>
      </div>
    </>
  );
}