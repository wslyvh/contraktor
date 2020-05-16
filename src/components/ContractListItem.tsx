
import React from 'react';
import { Contract, Address } from '../types';
import { Link } from 'react-router-dom';
import { CURRENT_NETWORK } from '../constants';
import { getNetworkColor } from '../utils/styling';

interface ContractListItemProps { 
  contract: Contract;
}

export const ContractListItem = (props: ContractListItemProps) => {
  const contract = props.contract;
  const address = contract.addresses.find((i: Address) => i.network.toLowerCase() === CURRENT_NETWORK.toLowerCase());

  const networkBadges = contract.addresses.map((address: Address) =>
    <span key={address.network} className={`badge badge-${getNetworkColor(address.network)} ml-1`}>{address.network}</span>
  );

  if (address) { 
    return (
      <>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to={`/contracts/${address.address}`}>
            {contract.name}
          </Link>
          <div>
            {networkBadges}
          </div>
        </li>
      </>
    );
  }

  return <></>
}