import { useEffect, useState } from "react";

// get connected account address
function useUserAddress(provider: any) {
  const [account, setAccount] = useState('');

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
