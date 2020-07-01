import React, { useEffect, useState } from 'react';
import { Notification, ContractDetails, Loading } from '../components';
import { useParams } from 'react-router-dom';
import { FullContractWrapper } from '../types';
import { getContract } from '../services/ContractService';
import { useWeb3React } from '@web3-react/core';
import { getProvider } from '../utils/web3';
import { Signer } from 'ethers';
import { BaseProvider } from 'ethers/providers';

export const ContractPage = () => {
  const { address } = useParams();
  const context = useWeb3React();
  const [loading, setLoading] = useState(true);
  const [contract, setContract] = useState<FullContractWrapper | undefined>(undefined);

  useEffect(() => {
    setLoading(true);
    
    async function asyncEffect() { 
      let signer: Signer | undefined;
      let provider = context.library as BaseProvider || getProvider();

      if (context.library) {
        signer = context.library.getSigner();
      }

      if (provider) {
        try {
          const contract = await getContract(address, provider, signer);
          setContract(contract);
        }
        catch (e) { 
          console.log("contract not found", e)
        }

        setLoading(false);
      }
    }

    asyncEffect();
  }, [address, context.account, context.library]);

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