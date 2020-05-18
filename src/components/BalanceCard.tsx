
import React, { useState, useEffect } from 'react';
import { getBalance } from '../services/ContractService';
import { parseEther } from '../utils/web3';
import { ethers } from 'ethers';

interface ContractProps { 
  address: string;
}

export const BalanceCard = (props: ContractProps) => {
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState(0);
  const [tokens, setTokens] = useState([]);
  
  const fetchBalance = async () => { 
    const balance = await getBalance(props.address);

    setBalance(balance);
    setLoading(false);
  }

  const fetchTokens = async () => { 
    try { 
      const response = await fetch(`https://api.ethplorer.io/getAddressInfo/${ethers.utils.getAddress(props.address)}?apiKey=freekey`);
      const body = await response.json();

      if (body.tokens) {
        const tokens = body.tokens.map((token: any) => { return { 
            address: token.tokenInfo.address,
            name: token.tokenInfo.name ?? token.tokenInfo.address,
            symbol: token.tokenInfo.symbol ?? token.tokenInfo.address,
            decimals: parseFloat(token.tokenInfo.decimals),
            balance: parseFloat(token.balance || 0)
        }});

        setTokens(tokens);
      }
    } catch { 
        console.log("Unable get token balance..")
    }
  }
  
  useEffect(() => {
    fetchBalance();
    fetchTokens();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  if (loading) { 
    return <></>
  }

  let tokenBalance = <></>
  if (tokens?.length) {
    tokenBalance = <span>Tokens: {tokens.length}</span>
  }

  return (
    <>
      <div className="card text-left">
        <div className="card-body">
          <p className="card-text">Balance: Ξ{parseEther(balance)} ETH</p>
          <p className="card-text">{tokenBalance}</p>
        </div>
      </div>
    </>
  );
}