import React, { useState, useEffect } from 'react';
import { getLatestTransaction } from '../services/ContractService';
import { Transaction } from '../types';
import { parseTimestampToMinutesAgo } from '../utils/time';
import { ETHERSCAN_TX_LINK } from '../constants';

interface ContractProps { 
  address: string;
}

export const TransactionCard = (props: ContractProps) => {
  const [loading, setLoading] = useState(true);
  const [transaction, setTransaction] = useState<Transaction | undefined>(undefined);

  const fetchTransaction = async () => { 
    const tx = await getLatestTransaction(props.address);
    
    setTransaction(tx);
    setLoading(false);
  }
  
  useEffect(() => {
    fetchTransaction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) { 
    return <></>
  }

  if (!transaction) { 
    return <span>No transaction(s) found..</span>
  } 

  return (
    <>
      <div className="card text-left">
        <div className="card-body">
          <p className="card-text">
            Latest activity: {parseTimestampToMinutesAgo(transaction.timestamp)} <br/>
            <small><a href={`${ETHERSCAN_TX_LINK}${transaction.hash}`} target="_blank" rel="noopener noreferrer" className="small text-info">View transaction</a></small>
          </p>
        </div>
      </div>
    </>
  );
}