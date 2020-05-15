import React, { useEffect, useState } from 'react';
import { Header } from '../components';
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
      console.log("getContract", address)
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

  if (!contract) { 
    return (
      <>
      <div>
        <Header />
      </div>
      <div>
        <p>Contract not found..</p>
      </div>
      </>
    );  
  } 

  return (
    <>
    <div>
      <Header />
    </div>
    <div>
      <h2>Contract</h2>
      <h3 className="text-muted small">{address} <small>{contract.name}</small></h3>
    </div>
    </>
  );
}