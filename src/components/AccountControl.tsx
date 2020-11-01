
import React from 'react';
import { AccountInfo } from './AccountInfo';
import useWeb3Modal from "../hooks/useWeb3Modal";

export const AccountControl = () => {
	const {
		account,
		provider,
		loadWeb3Modal,
		logoutOfWeb3Modal,
	} = useWeb3Modal();
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
