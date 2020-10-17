import { AbstractConnector } from '@web3-react/abstract-connector'

export interface Web3ReactManagerFunctions {
    activate: (connector: AbstractConnector, onError?: (error: Error) => void, throwErrors?: boolean) => Promise<void>
    setError: (error: Error) => void
    deactivate: () => void
}

// https://github.com/NoahZinsmeister/web3-react/blob/v6/packages/core/src/types.ts
export interface Web3ReactContextInterface<T = any> extends Web3ReactManagerFunctions {
    connector?: AbstractConnector
    library?: T
    chainId?: number
    account?: null | string

    active: boolean
    error?: Error
}
