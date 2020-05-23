import React, { useEffect, useState } from 'react';
import { Notification, ContractDetails, Loading } from '../components';
import { useParams } from 'react-router-dom';
import { FullContractWrapper } from '../types';
import { getContract } from '../services/ContractService';
import { useWeb3React } from '@web3-react/core';
import { BaseProvider } from 'ethers/providers';
import { getProvider } from '../utils/web3';

export const ContractPage = () => {
  const { address } = useParams();
  const context = useWeb3React();
  const [loading, setLoading] = useState(true);
  const [contract, setContract] = useState<FullContractWrapper | undefined>(undefined);

  useEffect(() => {
    setLoading(true);
    
    async function asyncEffect() { 
      const provider = context.library as BaseProvider || getProvider();
      if (provider) {
        const contract = await getContract(address, provider);


        setContract(contract);
        setLoading(false);
      }
    }

    asyncEffect();
  }, [address, context.library]);

  if (loading) { 
    return <Loading />
  } 
  
  if (!contract) { 
    return <Notification type="info" message={"Contract not found. Check your contract address & network"} />
  }

  return (
    <>
      <ContractDetails contract={contract} />
    </>
  );
}