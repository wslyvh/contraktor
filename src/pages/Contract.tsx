import React, { useEffect, useState } from 'react';
import { Notification, ContractDetails, Loading } from '../components';
import { useParams } from 'react-router-dom';
import { Contract, FullContractWrapper } from '../types';
import { getContract } from '../services/ContractService';
import { useWeb3React } from '@web3-react/core';
import { BaseProvider } from 'ethers/providers';
import { getProvider } from '../utils/web3';
import { ethers } from 'ethers';

export const ContractPage = () => {
  const { address } = useParams();
  const context = useWeb3React();
  const [loading, setLoading] = useState(true);
  const [contract, setContract] = useState<FullContractWrapper | undefined>(undefined);

  const fetchContract = async () => { 
    const provider = context.library as BaseProvider || getProvider();
    if (provider) {
      const contract = await getContract(address, provider);
      
      if (contract) {
        const fullContract: FullContractWrapper = {
          name: contract.name,
          abi: contract.abi,
          address: address,
          provider: provider,
          ethersContract: new ethers.Contract(address, contract.abi, provider)
        }

        setContract(fullContract);   
      }
      
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchContract();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context, address]);

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