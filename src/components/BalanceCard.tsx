
import React, { useState, useEffect } from 'react';
import { getBalance } from '../services/ContractService';
import { parseEther } from '../utils/web3';

interface ContractProps { 
  address: string;
}

export const BalanceCard = (props: ContractProps) => {
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState(0);
  
  const fetchBalance = async () => { 
    const balance = await getBalance(props.address);

    setBalance(balance);
    setLoading(false);
  }
  
  useEffect(() => {
    fetchBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  if (loading) { 
    return <></>
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <p className="card-text">Balance: {parseEther(balance)}</p>
        </div>
      </div>
    </>
  );
}