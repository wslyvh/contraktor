import React, { useEffect, useState } from 'react';
import { Notification, ContractDetails, Loading } from '../components';
import { useParams } from 'react-router-dom';
import { Contract } from '../types';
import { getContract } from '../services/ContractService';

export const ContractPage = () => {
  const { address } = useParams();
  const [loading, setLoading] = useState(true);
  const [contract, setContract] = useState<Contract | undefined>(undefined);
  
  const fetchContract = async () => { 
    const contract = await getContract(address);
    setContract(contract);   
    setLoading(false);
  }

  useEffect(() => {
    fetchContract();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) { 
    return <Loading />
  } 
  
  if (!contract) { 
    return <Notification type="info" message={"Contract not found. Check your contract address"} />
  }

  return (
    <>
      <ContractDetails contract={contract} />
    </>
  );
}