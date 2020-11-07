import React from 'react';
import { AccountInfo } from './AccountInfo';
import useWeb3Modal from "../hooks/useWeb3Modal";
import useUserAddress from '../hooks/useUserAddress';

export const AccountControl = () => {
  const [
    provider,
    loadWeb3Modal,
    logoutOfWeb3Modal,
	] = useWeb3Modal();
	const [account] = useUserAddress(provider);

	const onClick = () => {
    if (!provider) {
      loadWeb3Modal();
    } else {
      logoutOfWeb3Modal();
    }
  }
  if (account) {
      return <AccountInfo address={account} />
  }

  return <button type="button" className="btn btn-outline-info btn-sm" onClick={onClick}>
    {!provider ? "Connect Wallet" : "Disconnect Wallet"}
  </button>
}
