import React from 'react';
import { Header } from '../components';
import { useParams } from 'react-router-dom';
import { isContractAddress } from '../utils/web3';

export const ContractPage = () => {
  const { address } = useParams();
  const valid = isContractAddress(address);
  console.log("address", address, valid);
  
  return (
    <>
    <div>
      <Header />
    </div>
    <div>
      <h2>Contract</h2>
      <h3 className="text-muted small">{address}</h3>
    </div>
    </>
  );
}