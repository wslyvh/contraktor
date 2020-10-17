import { AbstractConnector } from '@web3-react/abstract-connector'

// https://github.com/NoahZinsmeister/web3-react/blob/v6/packages/core/src/types.ts
export interface Web3ReactManagerFunctions {
  activate: (connector: AbstractConnector, onError?: (error: Error) => void, throwErrors?: boolean) => Promise<void>
  setError: (error: Error) => void
  deactivate: () => void
}

export interface Web3ReactManagerReturn extends Web3ReactManagerFunctions {
  connector?: AbstractConnector
  provider?: any
  chainId?: number
  account?: null | string

  error?: Error
}

export interface Web3ReactContextInterface<T = any> extends Web3ReactManagerFunctions {
  connector?: AbstractConnector
  library?: T
  chainId?: number
  account?: null | string

  active: boolean
  error?: Error
}

export type Callback = () => void;
