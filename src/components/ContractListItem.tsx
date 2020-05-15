
import React from 'react';
import { Contract, Address } from '../types';
import { Link } from 'react-router-dom';
import { CURRENT_NETWORK } from '../constants';

interface ContractListItemProps { 
  contract: Contract;
}

export const ContractListItem = (props: ContractListItemProps) => {
  const contract = props.contract;
  const address = contract.addresses.find((i: Address) => i.network.toLowerCase() === CURRENT_NETWORK.toLowerCase());

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