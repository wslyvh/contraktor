import { useEffect } from 'react'
import { InjectedConnector } from "@web3-react/injected-connector";

import { Web3ReactContextInterface } from './types';

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
 * @returns {Object} provider
 *
 * Usage:
 *
 * ```js
 * import { useWeb3React } from '@web3-react/core';
 * const context = useWeb3React();
 * const provider = useWeb3Connect(context);
 * ```
 */
export const useWeb3Connect = (context?: Web3ReactContextInterface, connector:InjectedConnector = INJECTED_ETHEREUM_CONNECTOR) => {
    useEffect(() => {
        async function asyncEffect() {
            const authorized = await connector.isAuthorized();

            if (authorized) {
                await connectWeb3();
            }
        }
        asyncEffect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function connectWeb3() {
        if (context) {
            try {
                await context.activate(connector, undefined, true);
            } catch (error) {
                console.error(error);
            }
        } else {
            console.error('no context');
        }
    }

    return connectWeb3;
}

export default useWeb3Connect;
