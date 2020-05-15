
import React from 'react';
import { Contract, Address } from '../types';
import { Link } from 'react-router-dom';

const currentNetwork = "mainnet"; // todo

interface ContractListItemProps { 
  contract: Contract;
}

export const ContractListItem = (props: ContractListItemProps) => {
  const contract = props.contract;
  const address = contract.addresses.find((i: Address) => i.network.toLowerCase() === currentNetwork.toLowerCase());

  if (address) { 
    return (
      <>
        <li>
          <Link to={`/contracts/${address.address}`}>
            {contract.name}
          </Link>
        </li>
      </>
    );
  }

  return <></>
}