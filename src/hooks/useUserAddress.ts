import { useEffect, useState } from "react";
import useWeb3Modal from './useWeb3Modal';

// get connected account address
function useUserAddress() {
  const [account, setAccount] = useState('');
  const [provider] = useWeb3Modal();

  useEffect(() => {
    async function getAccount() {
      const signer = provider.getSigner();
      const gotAccount = await signer.getAddress();
      setAccount(gotAccount);
    }
    provider && getAccount();
  }, [provider]);
  return [account];
}

export default useUserAddress;
