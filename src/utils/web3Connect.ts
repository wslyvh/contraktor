import { useCallback, useEffect, useState } from 'react'
import { InjectedConnector } from "@web3-react/injected-connector";
import { Callback, Web3ReactContextInterface } from './types';

// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md
export const DEFAULT_ETHEREUM_CHAIN_IDS = [1, 3, 4, 5, 42];

/**
 * Specify support inject chains.
 *
 * @param {number[]} supportedChainIds support chain ids
 */
export const useInjectedChain = (supportedChainIds: number[]) =>
    new InjectedConnector({supportedChainIds});

export const INJECTED_ETHEREUM_CONNECTOR = useInjectedChain(DEFAULT_ETHEREUM_CHAIN_IDS);

/**
 * Wrap connect operation to web3
 * Default support Ethereum injected-connector like Metamask
 *
 * @param {Object} context get from useWeb3React()
 * @param {InjectedConnector} connector (optional, default as Injected connector for Ethereum chains)
 * @returns {[boolean, Callback]} tried ui reference to determine if we've tried to connect to the injected connector;
 * connectWeb3 function call to connect by click
 *
 * Usage:
 *
 * ```js
 * import { useWeb3React } from '@web3-react/core';
 * const context = useWeb3React();
 * const [tried, connectWeb3] = useWeb3Connect(context);
 * if (tried) {
 *   connectWeb3();
 * }
 * ```
 */
export const useWeb3Connect = (context: Web3ReactContextInterface, connector:InjectedConnector = INJECTED_ETHEREUM_CONNECTOR): [boolean, Callback] => {
    const [tried, setTried] = useState(false);
    const { activate, active } = context;

    const connectWeb3 = useCallback(async () => {
        try {
            await activate(connector, undefined, true);
        } catch (error) {
            console.log(error);
            setTried(true);
        }
    }, [activate, connector]);

    useEffect(() => {
        if (!context) {
            console.error('no context');
            return;
        }

        async function asyncEffect() {
            const authorized = await connector.isAuthorized();

            if (authorized) {
                await connectWeb3();
            } else {
                setTried(true);
            }
        }
        asyncEffect();
    }, [context, connector, connectWeb3, setTried]);

    // if the connection worked, wait until we get confirmation of that to flip the flag
    useEffect(() => {
        if (active) {
            setTried(true)
        }
    }, [active])

    return [tried, connectWeb3];
}

export default useWeb3Connect;
