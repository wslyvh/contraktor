
import React, { useState, useEffect } from 'react';
import { Contract } from '../types';
import { BalanceCard } from './BalanceCard';
import { TransactionCard } from './TransactionCard';
import { ETHERSCAN_ADDRESS_LINK } from '../constants';
import { ethers } from 'ethers';
import { Loading } from '.';
import { parseAddress, getProvider } from '../utils/web3';
import { useWeb3React } from '@web3-react/core';
import { BaseProvider } from 'ethers/providers';

interface ContractProps { 
  currentAddress: string;
  contract: Contract;
}

export const ContractDetails = (props: ContractProps) => {
  const context = useWeb3React();
  const [loading, setLoading] = useState(true);
  const [ctor, setConstructor] = useState<any | undefined>(undefined);
  const [fallback, setFallback] = useState<any | undefined>(undefined);
  const [functions, setFunctions] = useState({
    constants: new Array<any>(),
    functions: new Array<any>(),
    events: new Array<any>()
  });
  
  const parseContract = async () => { 
    const provider = context.library as BaseProvider || getProvider();
    const contract = new ethers.Contract(props.currentAddress, props.contract.abi, provider);

    const ctor = contract.interface.abi.find((member: any) => member.type === "constructor");
    const constants = contract.interface.abi.filter((member: any) => member.constant === true || (member.stateMutability === "view" || member.stateMutability === "pure"));
    const functions = contract.interface.abi.filter((member: any) => (member.constant === false) || 
      (member.stateMutability !== "view" && member.stateMutability !== "pure" && member.type !== "constructor" && member.type !== "receive"));
    const events = contract.interface.abi.filter((member: any) => member.type === "event");
    const fallback = contract.interface.abi.find((member: any) => member.type === "receive");
    
    const executableConstants = constants.filter(i => i.inputs?.length === 0).map(async i => {
      const value = await contract.functions[i.name]();
      return {
        name: i.name,
        value: value
      };
    });
    const currentState = await Promise.all(executableConstants);
    console.log(currentState);

    setConstructor(ctor);
    setFunctions({ constants, functions, events })
    setFallback(fallback);
    setLoading(false);
  }

  useEffect(() => {
    parseContract();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context]);
  
  if (loading) { 
    return <Loading />
  } 

  const renderConstructor = ctor ? 
    <>
      <h3>Constructor</h3>
      <div className="alert alert-secondary" role="alert">
        {ctor.type}
      </div>
    </> : <></>

  const renderFallback = fallback ? 
  <>
    <h3>Fallback</h3>
    <div className="alert alert-secondary" role="alert">
      {fallback.type}
    </div>
  </> : <></>

  const constantItems = functions.constants.map((func: any) => 
    <div key={`constant-${func.name}-${func.inputs?.length}`} className="alert alert-primary" role="alert">
      {func.name}
    </div>
  );

  const functionItems = functions.functions?.map((func: any) =>
    <div key={`function-${func.name}-${func.inputs?.length}`} className="alert alert-success" role="alert">
      {func.name}
    </div>
  );

  const eventItems = functions.events.map((func: any) =>
    <div key={`event-${func.name}-${func.inputs?.length}`} className="alert alert-warning" role="alert">
      {func.name}
    </div>
  );

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

        <div className="mt-3 text-left">

          {renderConstructor}

          <h3>Constant</h3>
          <div>
            {constantItems}
          </div>

          <h3>Functions</h3>
          <div>
            {functionItems}
          </div>

          <h3>Events</h3>
          <div>
            {eventItems}
          </div>

          {renderFallback}
        </div>

      </div>
    </>
  );
}