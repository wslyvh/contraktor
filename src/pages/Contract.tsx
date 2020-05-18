import React, { useEffect, useState } from 'react';
import { Notification, ContractDetails, Loading } from '../components';
import { useParams } from 'react-router-dom';
import { Contract } from '../types';
import { getContract } from '../services/ContractService';
import { useWeb3React } from '@web3-react/core';
import { BaseProvider } from 'ethers/providers';

export const ContractPage = () => {
  const { address } = useParams();
  const context = useWeb3React();
  const [loading, setLoading] = useState(true);
  const [contract, setContract] = useState<Contract | undefined>(undefined);

  const fetchContract = async () => { 
    const provider = context.library as BaseProvider;

    if (provider) {
      const contract = await getContract(address, provider);
      
      setContract(contract);   
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchContract();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context]);

  if (loading) { 
    return <Loading />
  } 
  
  if (!contract) { 
    return <Notification type="info" message={"Contract not found. Check your contract address & network"} />
  }

  return (
    <>
      <ContractDetails currentAddress={address} contract={contract} />
    </>
  );
}