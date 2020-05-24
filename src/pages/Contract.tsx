import React, { useEffect, useState } from 'react';
import { Notification, ContractDetails, Loading } from '../components';
import { useParams } from 'react-router-dom';
import { FullContractWrapper } from '../types';
import { getContract } from '../services/ContractService';
import { useWeb3React } from '@web3-react/core';
import { getProvider } from '../utils/web3';
import { Signer } from 'ethers';

export const ContractPage = () => {
  const { address } = useParams();
  const context = useWeb3React();
  const [loading, setLoading] = useState(true);
  const [contract, setContract] = useState<FullContractWrapper | undefined>(undefined);

  useEffect(() => {
    setLoading(true);
    
    async function asyncEffect() { 
      let signer: Signer | undefined;
      let provider = getProvider();

      if (context.library) {
        signer = context.library.getSigner();
      }

      if (provider) {
        const contract = await getContract(address, provider, signer);

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