import { useCallback, useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

// Enter a valid infura key here to avoid being rate limited
// You can get a key for free at https://infura.io/register
const INFURA_ID = "INVALID_INFURA_KEY";

const NETWORK_NAME = "mainnet";

function useWeb3Modal(config = {
	autoLoad: true,
	infuraId: INFURA_ID,
	NETWORK: NETWORK_NAME
}) {
  const [provider, setProvider] = useState();
	const [account, setAccount] = useState('');
	const { autoLoad, infuraId, NETWORK } = config;

  // Web3Modal also supports many other wallets.
  // You can see other options at https://github.com/Web3Modal/web3modal
  const web3Modal = new Web3Modal({
    network: NETWORK,
    cacheProvider: true,
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId,
        },
      },
    },
  });

	// get connected account address
	useEffect(() => {
		async function getAccount() {
			const signer = provider.getSigner();
			const gotAccount = await signer.getAddress();
			setAccount(gotAccount);
		}
		provider && getAccount();
	}, [provider]);

  // Open wallet selection modal.
  const loadWeb3Modal = useCallback(async () => {
    const newProvider = await web3Modal.connect();
    setProvider(new Web3Provider(newProvider));
  }, [web3Modal]);

  const logoutOfWeb3Modal = useCallback(
    async function () {
      await web3Modal.clearCachedProvider();
      window.location.reload();
    },
    [web3Modal],
  );

  // If user has loaded a wallet before, load it automatically.
  useEffect(() => {
    if (autoLoad && web3Modal.cachedProvider) {
      loadWeb3Modal();
    }
  }, [autoLoad, loadWeb3Modal, web3Modal.cachedProvider]);

  return {
		provider,
		loadWeb3Modal,
		logoutOfWeb3Modal,
		account
	};
}

export default useWeb3Modal;