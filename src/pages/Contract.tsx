import React, { useEffect, useState } from 'react';
import { Notification, ContractDetails } from '../components';
import { useParams } from 'react-router-dom';
import { isContractAddress } from '../utils/web3';
import { Contract } from '../types';
import { getContract } from '../services/ContractService';

export const ContractPage = () => {
  const { address } = useParams();
  const [contract, setContract] = useState<Contract | undefined>(undefined);
  const [valid, setValid] = useState(false);
  
  const isValid = async () => { 
    const valid = await isContractAddress(address);
    setValid(valid);
  }

  const fetchContract = async () => { 
    if (address && valid) { 
      const contract = await getContract(address);

      if (contract) { 
        setContract(contract);
      }
    }
  }

  useEffect(() => {
    if (address) { 
      isValid();
    }
    if (address && valid) { 
      fetchContract();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valid]);

  if (!valid) { 
    return <Notification type="info" message={"No valid contract address"} />
  }

  if (!contract) { 
    return <Notification type="info" message={"Contract not found"} />
  }

  return (
    <>
      <ContractDetails contract={contract} />
    </>
  );
}