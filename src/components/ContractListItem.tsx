
import React, { useEffect, useState } from 'react';
import { Contract, Address } from '../types';
import { Link } from 'react-router-dom';
import { getNetworkColor, getNetworkName } from '../utils/styling';
import { useWeb3React } from '@web3-react/core';

interface ContractListItemProps { 
  contract: Contract;
}

export const ContractListItem = (props: ContractListItemProps) => {
  const contract = props.contract;
  const context = useWeb3React();
  const [address, setAddress] = useState("");

  useEffect(() => {
    let networkName = "mainnet";
    if (context.chainId) {
      networkName = getNetworkName(context.chainId);
    } 

    const address = contract.addresses.find((i: Address) => i.network === networkName);
    if (address) {
      setAddress(address.address)
    }

  }, [contract.addresses, context.chainId]);

  const networkBadges = contract.addresses.map((address: Address) =>
    <span key={address.network} className={`badge badge-${getNetworkColor(address.network)} ml-1`}>{address.network}</span>
  );

  if (address) { 
    return (
      <>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link to={`/contracts/${address}`} className="stretched-link">
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